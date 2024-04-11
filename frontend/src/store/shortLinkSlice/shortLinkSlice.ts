import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { shortenLink } from './shortLinkThunks';

interface ShortLinkState {
  originalUrl: string;
  shortUrl: string;
  showShortUrl: boolean;
  loading: boolean;
  error: boolean;
}

const initialState: ShortLinkState = {
  originalUrl: '',
  shortUrl: '',
  showShortUrl: false,
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
  extraReducers: (builder) => {
    builder
      .addCase(shortenLink.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(
        shortenLink.fulfilled,
        (state, { payload: shortUrl }: PayloadAction<string>) => {
          state.loading = false;
          state.shortUrl = shortUrl;
          state.showShortUrl = true;
        }
      )
      .addCase(shortenLink.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const shortLinkReducer = shortLinkSlice.reducer;
export const { updateOriginalUrl, clearForm } = shortLinkSlice.actions;
export const selectOriginalUrl = (state: RootState) =>
  state.shortLink.originalUrl;
export const selectShortlUrl = (state: RootState) => state.shortLink.shortUrl;
export const selectFormLoading = (state: RootState) => state.shortLink.loading;
export const selectShowShortUrl = (state: RootState) =>
  state.shortLink.showShortUrl;
