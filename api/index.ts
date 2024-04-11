import express from 'express';
import cors from 'cors';
import linksRouter from './routers/links';
import mongoDb from './mongoDb';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/links', linksRouter);

const run = async () => {
  await mongoDb.connect();

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });

  process.on('exit', () => {
    mongoDb.disconnect();
  });
};

void run();
