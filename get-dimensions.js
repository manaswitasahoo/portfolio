
import sharp from 'sharp';
import path from 'path';

const inputPath = path.resolve('public/videos/prodman.gif');

async function getDimensions() {
  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`Dimensions of prodman.gif: ${metadata.width}x${metadata.height}`);
  } catch (error) {
    console.error('Error getting dimensions:', error);
  }
}

getDimensions();
