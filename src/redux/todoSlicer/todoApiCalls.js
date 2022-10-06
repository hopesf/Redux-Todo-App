import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:7000';

export const getTodos = createAsyncThunk('todo/getTodos', async () => {
  const { data } = await axios.get(url + '/todos');
  return data;
});

export const addTodo = createAsyncThunk('todo/addTodo', async (title) => {
  const { data } = await axios.post(url + '/todos', { title });
  return data;
});

export const changeCheckedTodo = createAsyncThunk('todo/changeCheckedTodo', async (id) => {
  const { data } = await axios.get(`${url}/todos/${id}`);
  return data;
});

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (id) => {
  await axios.delete(`${url}/todos/${id}`);
  return id;
});

export const clearCompletedItems = createAsyncThunk('todo/clearCompletedItems', async () => {
  const { data } = await axios.get(`${url}/clearAll`);
  return data;
});
