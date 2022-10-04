import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlicer/todoSlicer';

const AddTodo = () => {
  const [newTodoName, setNewTodoName] = useState('');
  const todoItems = useSelector((state) => state.todo.todoItems);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setNewTodoName(e.target.value.trim());
  };

  const handleEnterPress = (e) => {
    if (e.charCode === 13 && newTodoName.length > 0) {
      const check = todoItems.filter((el) => el.title === newTodoName);
      if (check.length < 1) {
        dispatch(addTodo(newTodoName));
      }
    }
  };

  return (
    <div className="border-b border-neutral-300">
      <input
        type="text"
        maxLength={30}
        onChange={handleInput}
        onKeyPress={handleEnterPress}
        className="w-full outline-none p-5 text-lg rounded text-primary-500"
        placeholder="Type New Todo"
      />
    </div>
  );
};
export default AddTodo;
