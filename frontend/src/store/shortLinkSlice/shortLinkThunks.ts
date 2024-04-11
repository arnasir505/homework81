import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { URLData } from '../../types';

export const shortenLink = createAsyncThunk<URLData, FormData>(
  'shortLink/shorten',
  async (urlData) => {
    try {
      const { data: linkData } = await axiosApi.post<URLData>(
        '/links',
        urlData
      );

      return linkData;
    } catch (error) {
      console.log(error);
      return {} as URLData;
    }
  }
);
