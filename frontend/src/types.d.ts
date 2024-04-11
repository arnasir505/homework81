export interface FormData {
  url: string;
}

export interface URLData extends URLDataWithoutId {
  _id: string;
  shortUrl: string;
  originalUrl: string;
}