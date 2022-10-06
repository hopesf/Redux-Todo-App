import { getTodos, addTodo, deleteTodo, changeCheckedTodo, clearCompletedItems } from './todoApiCalls';

const extraReducers = {
  //get all todos
  [getTodos.fulfilled]: (state, action) => {
    state.todoItems = action.payload;
    state.isLoading = false;
  },
  [getTodos.rejected]: (state, { error }) => {
    state.error = error.message;
    state.isLoading = false;
  },
  // add todos
  [addTodo.pending]: (state) => {
    state.apistatus.isLoading = true;
  },
  [addTodo.fulfilled]: (state, action) => {
    state.todoItems.push(action.payload);
    state.apistatus.isLoading = false;
  },
  [addTodo.rejected]: (state, action) => {
    state.apistatus.isError = action.error.message;
    state.apistatus.isLoading = false;
  },

  // delete todo
  [deleteTodo.fulfilled]: (state, action) => {
    const index = state.todoItems.findIndex((item) => item.id === action.payload.id);
    state.todoItems.splice(index, 1);
  },
  [deleteTodo.rejected]: (state, action) => {
    state.apistatus.isError = action.error.message;
  },

  // changeCheckedTodo
  [changeCheckedTodo.fulfilled]: (state, { payload }) => {
    state.todoItems = payload;
  },
  [changeCheckedTodo.rejected]: (state, action) => {
    state.apistatus.isError = action.error.message;
  },

  //clearCompletedItems
  [clearCompletedItems.pending]: (state, action) => {
    state.apistatus.isLoading = true;
  },
  [clearCompletedItems.fulfilled]: (state, action) => {
    console.log(action.payload);
    state.todoItems = action.payload;
    state.apistatus.isLoading = false;
  },
};

export default extraReducers;
