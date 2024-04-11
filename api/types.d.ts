export interface URLDataWithoutId {
  shortUrl: string;
  originalUrl: string;
}

export interface URLData extends URLDataWithoutId {
  _id: string;
}