import express from 'express';
import getImagePath from '../../utilities/getImagePath';

const images = express.Router();

images.get('/', (req: express.Request, res: express.Response) => {
  imageProcessing(req, res);
});

async function imageProcessing(req: express.Request, res: express.Response) {
  const fileName = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  if (!fileName) {
    res.status(400).send('Missing file name');
    return;
  }
  if (!width) {
    res.status(400).send('Missing width');
    return;
  }
  if (!height) {
    res.status(400).send('Missing height');
    return;
  }
  if (!/^[a-zA-Z]+$/i.test(fileName)) {
    res.status(400).send('Invalid file name');
    return;
  }
  if (!/^[0-9]+$/i.test(width.toString())) {
    res.status(400).send('Invalid width');
    return;
  }
  if (!/^[0-9]+$/i.test(height.toString())) {
    res.status(400).send('Invalid height');
    return;
  }
  const convertedImage = await getImagePath(fileName, width, height);
  console.log('convertedImage: ', convertedImage);
  if (convertedImage) {
    res.status(200).sendFile(convertedImage);
    return;
  }
  res.status(404).send('Image processing failed!');
}
export default images;
