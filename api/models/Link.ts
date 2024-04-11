import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LinkSchema = new Schema(
  {
    shortUrl: {
      type: String,
      required: true,
    },
    originalUrl: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Link = mongoose.model('Link', LinkSchema);

export default Link;