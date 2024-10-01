import sharp from 'sharp';
import path from 'path';
const inputFolder = path.resolve('images');
const outputFolder = path.resolve('output');

async function resizeImage(fileName: string, width: number, height: number) {
  const inputPath = path.join(inputFolder, `${fileName}.jpg`);
  const outputPath = path.join(outputFolder, `${fileName}-${width}-${height}.jpg`);
  try {
    await sharp(inputPath).resize(width, height).toFile(outputPath);

    return outputPath;
  } catch (e) {
    console.warn(e);
    return '';
  }
}

export default resizeImage;
