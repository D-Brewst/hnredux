import { configureStore } from '@reduxjs/toolkit';
import { hnApi } from '../services/news';

export const store = configureStore({
  reducer: {[hnApi.reducerPath]: hnApi.reducer},
})