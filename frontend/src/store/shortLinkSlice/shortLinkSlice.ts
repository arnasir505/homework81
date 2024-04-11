import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface ShortLinkState {
  originalUrl: string;
  shortUrl: string;
  loading: boolean;
  error: boolean;
}

const initialState: ShortLinkState = {
  originalUrl: '',
  shortUrl: '',
  loading: false,
  error: false,
};

const shortLinkSlice = createSlice({
  name: 'shortLink',
  initialState,
  reducers: {
    updateOriginalUrl: (
      state,
      { payload: originalUrl }: PayloadAction<string>
    ) => {
      state.originalUrl = originalUrl;
    },
    clearForm: (state) => {
      state.originalUrl = '';
    },
  },
});

export const shortLinkReducer = shortLinkSlice.reducer;
export const { updateOriginalUrl, clearForm } = shortLinkSlice.actions;
export const selectOriginalUrl = (state: RootState) =>
  state.shortLink.originalUrl;
export const selectShortlUrl = (state: RootState) => state.shortLink.shortUrl;
export const selectFormLoading = (state: RootState) => state.shortLink.loading;
