import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { hnApi } from '../services/news';
import historySlice from '../services/historySlice';

const reducer = combineReducers({
    history: historySlice,
    [hnApi.reducerPath]: hnApi.reducer
})

export const store = configureStore({
  reducer
})