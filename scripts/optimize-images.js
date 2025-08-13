const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization settings
const optimizationSettings = {
  quality: 80,
  format: 'webp',
  width: 1920, // max width
};

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Resize if larger than max width
    if (metadata.width > options.width) {
      image.resize(options.width, null, { withoutEnlargement: true });
    }
    
    // Convert to WebP with quality settings
    await image
      .webp({ quality: options.quality })
      .toFile(outputPath);
    
    console.log(`✅ Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function optimizeAllImages() {
  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('optimized')
  );
  
  console.log(`Found ${imageFiles.length} images to optimize...`);
  
  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    await optimizeImage(inputPath, outputPath, optimizationSettings);
  }
  
  console.log('🎉 Image optimization complete!');
}

// Run optimization
optimizeAllImages().catch(console.error);
