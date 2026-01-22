/**
 * Script to optimize all images in the project:
 * 1. Convert PNG/JPG to WebP format
 * 2. Create optimized versions of original formats
 * 3. Generate responsive sizes for large images
 * 
 * Requirements: sharp package
 * Run: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, '../public');
const imageExtensions = ['.png', '.jpg', '.jpeg'];
const excludeDirs = ['node_modules', '.next', 'fonts', 'locales'];

// Sizes for responsive images (only for large images > 500px)
const responsiveSizes = [
  { width: 400, suffix: '-400w' },
  { width: 800, suffix: '-800w' },
  { width: 1200, suffix: '-1200w' },
];

// Threshold: only create responsive sizes for images larger than this
const RESPONSIVE_THRESHOLD = 500;

/**
 * Check if file should be excluded
 */
function shouldExclude(filePath) {
  const relativePath = path.relative(publicDir, filePath);
  return excludeDirs.some(dir => relativePath.includes(dir)) ||
         filePath.includes('-optimized') ||
         filePath.includes('-400w') ||
         filePath.includes('-800w') ||
         filePath.includes('-1200w') ||
         filePath.includes('.webp');
}

/**
 * Get image dimensions
 */
async function getImageDimensions(filePath) {
  try {
    const metadata = await sharp(filePath).metadata();
    return { width: metadata.width, height: metadata.height };
  } catch (error) {
    return null;
  }
}

/**
 * Optimize a single image
 */
async function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const dir = path.dirname(filePath);
    const basename = path.basename(filePath, ext);
    const stats = fs.statSync(filePath);
    const originalSizeKB = (stats.size / 1024).toFixed(2);

    console.log(`\n📸 Processing: ${path.relative(publicDir, filePath)} (${originalSizeKB} KB)`);

    // Get dimensions
    const dimensions = await getImageDimensions(filePath);
    if (!dimensions) {
      console.log(`   ⚠️  Skipped: Cannot read image dimensions`);
      return;
    }

    const { width, height } = dimensions;
    const isLarge = width > RESPONSIVE_THRESHOLD || height > RESPONSIVE_THRESHOLD;

    // 1. Create WebP version
    const webpPath = path.join(dir, `${basename}.webp`);
    await sharp(filePath)
      .webp({
        quality: 85,
        effort: 6,
      })
      .toFile(webpPath);
    
    const webpStats = fs.statSync(webpPath);
    const webpSizeKB = (webpStats.size / 1024).toFixed(2);
    const webpSavings = ((stats.size - webpStats.size) / 1024).toFixed(2);
    console.log(`   ✅ WebP: ${basename}.webp (${webpSizeKB} KB, saved ${webpSavings} KB)`);

    // 2. Create optimized original format (PNG/JPG)
    const optimizedPath = path.join(dir, `${basename}-optimized${ext}`);
    
    if (ext === '.png') {
      await sharp(filePath)
        .png({
          quality: 90,
          compressionLevel: 9,
        })
        .toFile(optimizedPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(filePath)
        .jpeg({
          quality: 85,
          mozjpeg: true,
        })
        .toFile(optimizedPath);
    }

    const optimizedStats = fs.statSync(optimizedPath);
    const optimizedSizeKB = (optimizedStats.size / 1024).toFixed(2);
    const optimizedSavings = ((stats.size - optimizedStats.size) / 1024).toFixed(2);
    console.log(`   ✅ Optimized: ${basename}-optimized${ext} (${optimizedSizeKB} KB, saved ${optimizedSavings} KB)`);

    // 3. Create responsive sizes for large images
    if (isLarge) {
      console.log(`   📱 Creating responsive sizes...`);
      
      for (const size of responsiveSizes) {
        const targetWidth = Math.min(size.width, width);
        const targetHeight = Math.round((targetWidth / width) * height);
        
        // WebP responsive
        const webpResponsivePath = path.join(dir, `${basename}${size.suffix}.webp`);
        await sharp(filePath)
          .resize(targetWidth, targetHeight, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .webp({
            quality: 85,
            effort: 6,
          })
          .toFile(webpResponsivePath);
        
        const webpRespStats = fs.statSync(webpResponsivePath);
        const webpRespSizeKB = (webpRespStats.size / 1024).toFixed(2);
        console.log(`      ✅ ${basename}${size.suffix}.webp (${targetWidth}x${targetHeight}, ${webpRespSizeKB} KB)`);

        // Original format responsive
        const origResponsivePath = path.join(dir, `${basename}${size.suffix}${ext}`);
        if (ext === '.png') {
          await sharp(filePath)
            .resize(targetWidth, targetHeight, {
              fit: 'inside',
              withoutEnlargement: true,
            })
            .png({
              quality: 90,
              compressionLevel: 9,
            })
            .toFile(origResponsivePath);
        } else {
          await sharp(filePath)
            .resize(targetWidth, targetHeight, {
              fit: 'inside',
              withoutEnlargement: true,
            })
            .jpeg({
              quality: 85,
              mozjpeg: true,
            })
            .toFile(origResponsivePath);
        }
      }
    }

    const totalSavings = ((stats.size - webpStats.size) / 1024).toFixed(2);
    console.log(`   💾 Total savings: ${totalSavings} KB (${((1 - webpStats.size / stats.size) * 100).toFixed(1)}% reduction)`);

  } catch (error) {
    console.error(`   ❌ Error processing ${filePath}:`, error.message);
  }
}

/**
 * Recursively find all images
 */
function findImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !shouldExclude(filePath)) {
      findImages(filePath, fileList);
    } else if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext) && !shouldExclude(filePath)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

/**
 * Main function
 */
async function optimizeAllImages() {
  try {
    console.log('🚀 Starting image optimization...\n');
    console.log(`📁 Scanning: ${publicDir}\n`);

    const images = findImages(publicDir);
    
    if (images.length === 0) {
      console.log('❌ No images found to optimize');
      return;
    }

    console.log(`Found ${images.length} image(s) to optimize\n`);
    console.log('═'.repeat(60));

    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;

    for (const imagePath of images) {
      const stats = fs.statSync(imagePath);
      totalOriginalSize += stats.size;
      
      await optimizeImage(imagePath);
    }

    console.log('\n' + '═'.repeat(60));
    console.log('\n✨ Optimization complete!');
    console.log(`\n📊 Summary:`);
    console.log(`   Total images processed: ${images.length}`);
    console.log(`   Original total size: ${(totalOriginalSize / 1024).toFixed(2)} KB`);
    console.log(`\n📝 Next steps:`);
    console.log(`   1. Update components to use OptimizedImage component`);
    console.log(`   2. Replace image paths with .webp versions`);
    console.log(`   3. Test the optimized images`);

  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

optimizeAllImages();

