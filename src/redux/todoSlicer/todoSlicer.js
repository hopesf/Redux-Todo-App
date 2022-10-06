import { createSlice } from '@reduxjs/toolkit';
import extraReducers from './todoApiCallManage';

const localCheck = localStorage.getItem('activeFilter');
const initialState = {
  todoItems: [],
  activeFilter: localCheck?.length > 0 ? localCheck : 'all',
  isLoading: true,
  error: null,
  apistatus: {
    isLoading: false,
    isError: null,
  },
};

const reducers = {
  changeActiveFilter: (state, { payload }) => {
    state.activeFilter = payload;
  },
};

const todoSlicer = createSlice({
  name: 'todo',
  initialState,
  reducers,
  extraReducers,
});

export const { changeActiveFilter } = todoSlicer.actions;
export default todoSlicer.reducer;
