import express from 'express';
import images from './api/images';

const route = express.Router();

route.get('/', (req, res) => {
    res.status(200).send(`api is accessed!`);
});

route.use('/images', images);

export default route;