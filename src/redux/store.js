import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlicer/todoSlicer';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
