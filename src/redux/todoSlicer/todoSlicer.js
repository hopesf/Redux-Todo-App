import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoItems: [
    {
      title: 'işe git',
      isChecked: true,
    },
    {
      title: 'yemek ye',
      isChecked: true,
    },
    {
      title: 'oyun oyna',
      isChecked: false,
    },
  ],
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
};

const todoSlicer = createSlice({
  name: 'todo',
  initialState,
  reducers,
});

export const { addTodo, changeChecked, clearCompleted } = todoSlicer.actions;
export default todoSlicer.reducer;
