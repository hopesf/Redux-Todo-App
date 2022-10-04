import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoItems: [
    {
      title: 'Wake up and go to work',
      isChecked: true,
    },
    {
      title: 'Lets eat some food',
      isChecked: true,
    },
    {
      title: 'Go home and play game',
      isChecked: false,
    },
  ],
  activeFilter: 'all',
};

const reducers = {
  addTodo: (state, action) => {
    state.todoItems = [...state.todoItems, { title: action.payload, isChecked: false }];
  },
  changeChecked: (state, { payload }) => {
    state.todoItems = state.todoItems.map((el) =>
      el.title === payload.title ? { ...el, isChecked: payload.isChecked } : el
    );
  },
  clearCompleted: (state) => {
    state.todoItems = state.todoItems.filter((el) => el.isChecked === false);
  },
  removeItem: (state, { payload }) => {
    state.todoItems = state.todoItems.filter((el) => el.title !== payload.title);
  },
  changeActiveFilter: (state, { payload }) => {
    state.activeFilter = payload;
  },
};

const todoSlicer = createSlice({
  name: 'todo',
  initialState,
  reducers,
});

export const { addTodo, changeChecked, clearCompleted, removeItem, changeActiveFilter } = todoSlicer.actions;
export default todoSlicer.reducer;
