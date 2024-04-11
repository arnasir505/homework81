import express from 'express';
import mongoDb from '../mongoDb';
import { URLDataWithoutId } from '../types';

const linksRouter = express.Router();

linksRouter.get('/', async (_req, res, next) => {
  try {
    const db = mongoDb.getDb();

    const result = await db.collection('links').find().toArray();
    return res.send(result);
  } catch (error) {
    next(error);
  }
});

linksRouter.post('/', async (req, res, next) => {
  try {
    if (!req.body.url) {
      return res.status(422).send({ error: 'URL field is required!' });
    }

    const urlData: URLDataWithoutId = {
      originalUrl: req.body.url,
      shortUrl: 'randomUrlHere',
    };

    const db = mongoDb.getDb();
    await db.collection('links').insertOne(urlData);

    return res.send(urlData);
  } catch (error) {
    next(error);
  }
});

export default linksRouter;
