import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, todoItemsSelector } from '../redux/todoSlicer/todoSlicer';

const AddTodo = () => {
  const [newTodoName, setNewTodoName] = useState('');
  const todoItems = useSelector(todoItemsSelector);
  const dispatch = useDispatch();

  const handleInput = ({ target }) => {
    setNewTodoName(target.value.trim());
  };

  const CheckExist = () => {
    const filter = todoItems.filter((el) => el.title === newTodoName);
    return filter.length < 1 ? true : false;
  };

  const handleEnterPress = ({ charCode }) => {
    if (charCode === 13 && newTodoName.length > 0) {
      const result = CheckExist();
      result ? dispatch(addTodo(newTodoName)) : NaN;
      setNewTodoName('');
    }
  };

  return (
    <div className="border-b border-neutral-300">
      <input
        type="text"
        maxLength={30}
        onChange={handleInput}
        onKeyPress={handleEnterPress}
        value={newTodoName}
        className="w-full outline-none p-5 text-lg rounded text-primary-500"
        placeholder="Type New Todo"
      />
    </div>
  );
};
export default AddTodo;
