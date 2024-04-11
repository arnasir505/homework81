import express from 'express';
import cors from 'cors';
import linksRouter from './routers/links';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/links', linksRouter);

const run = async () => {
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
};

void run();
