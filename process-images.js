
import sharp from 'sharp';
import path from 'path';

const inputPath = path.resolve('src/assets/images/manaswita_logo_new.png');
const outputPath = path.resolve('src/assets/images');

async function processImages() {
  try {
    // For the animated logo (300x300)
    await sharp(inputPath)
      .resize(300, 300, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 1 } // Black background
      })
      .toFile(path.join(outputPath, 'logo_animated.png'));
    console.log('Successfully created logo_animated.png (300x300)');

    // For the navbar logo (100x50)
    await sharp(inputPath)
      .resize(100, 50, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 1 } // Black background
      })
      .toFile(path.join(outputPath, 'logo_navbar.png'));
    console.log('Successfully created logo_navbar.png (100x50)');

  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages();
