
import fs from 'fs';
import path from 'path';
import resizeImage from './resizeImage';

const inputFolder = path.resolve('images');
const outputFolder = path.resolve('output');

async function getImagePath(fileName: string, width: number, height: number) {
    const inputPath = path.join(inputFolder, `${fileName}.jpg`);
    const outputPath = path.join(outputFolder, `${fileName}-${width}-${height}.jpg`);
    const existOutputFile = fs.existsSync(outputPath);
    if (existOutputFile) {
        return outputPath;
    }

    const existInputFile = fs.existsSync(inputPath);
    if (!existInputFile) {
        return '';
    }

    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
    }

    const convertedImage = await resizeImage(fileName, width, height);
    return convertedImage;
}

export default getImagePath;