import express from 'express';
import route from './routes';

const app = express();
const port = 3000;

app.use('/api', route);

app.get('/', (req, res) => {
  res.status(200).send(`Welcome my project!`);
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});

export default app;
