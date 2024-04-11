import express from 'express';
import { URLDataWithoutId } from '../types';
import randomstring from 'randomstring';
import Link from '../models/Link';

const linksRouter = express.Router();

linksRouter.get('/:shortUrl', async (req, res, next) => {
  try {
    const shortUrl = req.params.shortUrl;

    const shortenedLink = await Link.findOne({ shortUrl: shortUrl });

    if (!shortenedLink) {
      return res.status(404).send({ error: 'Not Found!' });
    }

    return res.status(301).redirect(shortenedLink.originalUrl);
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
      shortUrl: randomstring.generate({
        length: 7,
        charset: 'alphabetic',
      }),
      originalUrl: req.body.url,
    };

    const link = new Link(urlData);
    await link.save();

    return res.send(link);
  } catch (error) {
    next(error);
  }
});

export default linksRouter;
