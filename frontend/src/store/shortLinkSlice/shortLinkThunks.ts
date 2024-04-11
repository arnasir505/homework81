import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { FormData, URLData } from '../../types';

export const shortenLink = createAsyncThunk<string, FormData>(
  'shortLink/shorten',
  async (urlData) => {
    try {
      const { data: linkData } = await axiosApi.post<URLData>(
        '/links',
        urlData
      );

      return linkData.shortUrl;
    } catch (error) {
      console.log(error);
      return '';
    }
  }
);
