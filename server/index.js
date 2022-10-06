import express from 'express';
import bodyParser from 'body-parser';
import { nanoid } from 'nanoid';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

let todos = [
  {
    id: nanoid(),
    title: 'Wake up and go to work',
    isChecked: true,
  },
  {
    id: nanoid(),
    title: 'Lets eat some food',
    isChecked: true,
  },
  {
    id: nanoid(),
    title: 'Go home and sleep well',
    isChecked: false,
  },
];

/* get all todos*/
app.get('/todos', (req, res) => res.json(todos));

/* add new todo */
app.post('/todos', (req, res) => {
  const { title } = req.body;

  const newTodo = { title, id: nanoid(), isChecked: false };
  todos.push(newTodo);
  res.json(newTodo);
});

/* update todo */
app.get('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  const x = todos.map((todo) => (todo.id == todoId ? { ...todo, isChecked: !todo.isChecked } : todo));
  todos = [...x];
  return res.json(x);
});

/* delete todo*/
app.delete('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  const index = todos.findIndex((todo) => todo.id == todoId);
  if (index > -1) {
    todos.splice(index, 1);
  }

  res.json(todos);
});

/* clear completed todos */
app.get('/clearAll', (req, res) => {
  const cleared = todos.filter((el) => el.isChecked == false);
  todos = [...cleared];
  res.json(cleared);
});

const port = 7000;

app.listen(port, () => {
  console.log('server listening port: ' + port);
});
