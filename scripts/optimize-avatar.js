/**
 * Script to optimize avatar image:
 * 1. Resize from 400x400 to 350x350 (actual display size)
 * 2. Convert PNG to WebP format
 * 3. Generate multiple sizes for responsive images
 * 
 * Requirements: sharp package
 * Run: node scripts/optimize-avatar.js
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, '../public/assets/banner/avatar.png');
const outputDir = path.join(__dirname, '../public/assets/banner');

// Sizes for responsive images
const sizes = [
  { width: 175, suffix: '-175w' },   // Mobile (1x)
  { width: 350, suffix: '-350w' },   // Desktop (1x)
  { width: 700, suffix: '-700w' },   // Retina (2x)
];

async function optimizeAvatar() {
  try {
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error('❌ Avatar file not found:', inputPath);
      process.exit(1);
    }

    console.log('🔄 Optimizing avatar image...\n');

    // Generate WebP versions for each size
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `avatar${size.suffix}.webp`);
      
      await sharp(inputPath)
        .resize(size.width, size.width, {
          fit: 'cover',
          position: 'center',
        })
        .webp({
          quality: 85, // Good balance between quality and file size
          effort: 6,   // Higher effort = better compression (0-6)
        })
        .toFile(outputPath);

      const stats = fs.statSync(outputPath);
      const fileSizeKB = (stats.size / 1024).toFixed(2);
      console.log(`✅ Created: avatar${size.suffix}.webp (${size.width}x${size.width}, ${fileSizeKB} KB)`);
    }

    // Also create optimized PNG fallback for each size
    for (const size of sizes) {
      const pngOutputPath = path.join(outputDir, `avatar${size.suffix}.png`);
      
      await sharp(inputPath)
        .resize(size.width, size.width, {
          fit: 'cover',
          position: 'center',
        })
        .png({
          quality: 90,
          compressionLevel: 9,
        })
        .toFile(pngOutputPath);

      const pngStats = fs.statSync(pngOutputPath);
      const pngSizeKB = (pngStats.size / 1024).toFixed(2);
      console.log(`✅ Created: avatar${size.suffix}.png (${size.width}x${size.width}, ${pngSizeKB} KB)`);
    }

    // Main optimized PNG (350x350) - also create without suffix for backward compatibility
    const pngOutputPath = path.join(outputDir, 'avatar-optimized.png');
    await sharp(inputPath)
      .resize(350, 350, {
        fit: 'cover',
        position: 'center',
      })
      .png({
        quality: 90,
        compressionLevel: 9,
      })
      .toFile(pngOutputPath);

    const pngStats = fs.statSync(pngOutputPath);
    const pngSizeKB = (pngStats.size / 1024).toFixed(2);
    console.log(`✅ Created: avatar-optimized.png (350x350, ${pngSizeKB} KB)\n`);

    // Get original file size for comparison
    const originalStats = fs.statSync(inputPath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(2);
    console.log(`📊 Original: avatar.png (400x400, ${originalSizeKB} KB)`);
    console.log(`💾 Savings: ~${(parseFloat(originalSizeKB) - parseFloat(pngSizeKB)).toFixed(2)} KB (PNG optimized)`);
    console.log(`💾 WebP savings: ~${(parseFloat(originalSizeKB) - parseFloat((fs.statSync(path.join(outputDir, 'avatar-350w.webp')).size / 1024)).toFixed(2))} KB\n`);

    console.log('✨ Optimization complete!');
    console.log('\n📝 Next steps:');
    console.log('1. Update Banner component to use WebP with PNG fallback');
    console.log('2. Add sizes attribute for responsive images');
    console.log('3. Test the optimized images');

  } catch (error) {
    console.error('❌ Error optimizing avatar:', error);
    process.exit(1);
  }
}

optimizeAvatar();

