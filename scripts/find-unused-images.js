/**
 * Script to find and optionally delete unused images
 * 
 * Analyzes all images in public/ and checks if they're referenced in code
 * 
 * Run: node scripts/find-unused-images.js [--delete]
 */

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
const excludeDirs = ['node_modules', '.next', 'fonts', 'locales'];

/**
 * Get all image files recursively
 */
function getAllImages(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    
    try {
      const stat = fs.statSync(filePath);

      if (stat.isDirectory() && !excludeDirs.some(exclude => filePath.includes(exclude))) {
        getAllImages(filePath, fileList);
      } else if (stat.isFile()) {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          fileList.push(filePath);
        }
      }
    } catch (e) {
      // Skip if can't read
    }
  });

  return fileList;
}

/**
 * Get relative path from public directory
 */
function getPublicPath(filePath) {
  const relative = path.relative(publicDir, filePath);
  return relative.replace(/\\/g, '/'); // Normalize path separators
}

/**
 * Get base name without extension and optimization suffixes
 */
function getBaseName(filePath) {
  const basename = path.basename(filePath);
  // Remove extension
  let name = basename.replace(/\.(png|jpg|jpeg|webp)$/i, '');
  // Remove optimization suffixes
  name = name.replace(/-optimized$/, '');
  name = name.replace(/-\d+w$/, ''); // -400w, -800w, etc.
  return name;
}

/**
 * Get directory of image relative to public
 */
function getImageDir(filePath) {
  const dir = path.dirname(filePath);
  const relativeDir = path.relative(publicDir, dir).replace(/\\/g, '/');
  return relativeDir === '.' ? '' : relativeDir;
}

/**
 * Read all code files and search for image references
 */
function getAllCodeFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    
    try {
      const stat = fs.statSync(filePath);

      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== '.next') {
        getAllCodeFiles(filePath, fileList);
      } else if (stat.isFile()) {
        const ext = path.extname(file).toLowerCase();
        if (['.js', '.jsx', '.ts', '.tsx', '.json'].includes(ext)) {
          fileList.push(filePath);
        }
      }
    } catch (e) {
      // Skip
    }
  });

  return fileList;
}

/**
 * Search for image references in all code files
 */
function searchForImageInFiles(imagePath, allCodeFiles) {
  const publicPath = getPublicPath(imagePath);
  const baseName = getBaseName(imagePath);
  const imageDir = getImageDir(imagePath);
  
  // Build search patterns
  const patterns = [];
  
  // Full path with leading slash
  patterns.push(`/${publicPath}`);
  patterns.push(`"${publicPath}"`);
  patterns.push(`'${publicPath}'`);
  patterns.push(`/${publicPath.replace(/\.(png|jpg|jpeg|webp)$/i, '')}`);
  
  // Base name patterns
  if (imageDir) {
    patterns.push(`${imageDir}/${baseName}`);
    patterns.push(`/${imageDir}/${baseName}`);
    patterns.push(`"${imageDir}/${baseName}"`);
    patterns.push(`'${imageDir}/${baseName}'`);
  }
  
  patterns.push(baseName);
  patterns.push(`"${baseName}"`);
  patterns.push(`'${baseName}'`);
  
  // Also check without extension
  const nameWithoutExt = publicPath.replace(/\.(png|jpg|jpeg|webp)$/i, '');
  patterns.push(`/${nameWithoutExt}`);
  patterns.push(`"${nameWithoutExt}"`);
  patterns.push(`'${nameWithoutExt}'`);

  // Search in all code files
  for (const codeFile of allCodeFiles) {
    try {
      const content = fs.readFileSync(codeFile, 'utf-8');
      
      for (const pattern of patterns) {
        if (content.includes(pattern)) {
          return true;
        }
      }
    } catch (e) {
      // Skip if can't read
    }
  }

  return false;
}

/**
 * Main function
 */
function findUnusedImages(deleteFiles = false) {
  console.log('🔍 Scanning for unused images...\n');
  
  const allImages = getAllImages(publicDir);
  console.log(`Found ${allImages.length} image(s) in public/\n`);
  
  // Get all code files to search
  const projectRoot = path.join(__dirname, '..');
  const codeDirs = [
    path.join(projectRoot, 'components'),
    path.join(projectRoot, 'pages'),
  ];
  
  let allCodeFiles = [];
  for (const dir of codeDirs) {
    if (fs.existsSync(dir)) {
      allCodeFiles = allCodeFiles.concat(getAllCodeFiles(dir));
    }
  }
  
  console.log(`Found ${allCodeFiles.length} code file(s) to search\n`);
  console.log('Checking image usage...\n');
  
  const unusedImages = [];
  const usedImages = [];
  
  for (const imagePath of allImages) {
    const publicPath = getPublicPath(imagePath);
    const isUsed = searchForImageInFiles(imagePath, allCodeFiles);
    
    if (isUsed) {
      usedImages.push(imagePath);
      process.stdout.write('✅ ');
    } else {
      unusedImages.push(imagePath);
      process.stdout.write('❌ ');
    }
    
    console.log(publicPath);
  }
  
  console.log('\n' + '═'.repeat(60));
  console.log(`\n📊 Summary:`);
  console.log(`   Total images: ${allImages.length}`);
  console.log(`   Used: ${usedImages.length}`);
  console.log(`   Unused: ${unusedImages.length}`);
  
  if (unusedImages.length > 0) {
    console.log(`\n🗑️  Unused images:`);
    unusedImages.forEach(img => {
      console.log(`   - ${getPublicPath(img)}`);
    });
    
    if (deleteFiles) {
      console.log(`\n🗑️  Deleting ${unusedImages.length} unused image(s)...`);
      let deleted = 0;
      unusedImages.forEach(img => {
        try {
          fs.unlinkSync(img);
          console.log(`   ✅ Deleted: ${getPublicPath(img)}`);
          deleted++;
        } catch (e) {
          console.log(`   ❌ Error deleting ${getPublicPath(img)}: ${e.message}`);
        }
      });
      console.log(`\n✨ Deleted ${deleted} file(s)`);
    } else {
      console.log(`\n💡 To delete unused images, run:`);
      console.log(`   node scripts/find-unused-images.js --delete`);
    }
  } else {
    console.log(`\n✨ All images are being used!`);
  }
}

// Parse command line arguments
const deleteFiles = process.argv.includes('--delete') || process.argv.includes('-d');

findUnusedImages(deleteFiles);
