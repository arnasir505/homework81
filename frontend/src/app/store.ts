import { configureStore } from '@reduxjs/toolkit';
import { shortLinkReducer } from '../store/shortLinkSlice/shortLinkSlice';

export const store = configureStore({
  reducer: {
    shortLink: shortLinkReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
