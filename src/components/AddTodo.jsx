import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlicer/todoApiCalls';
import { todoItemsSelector } from '../redux/todoSlicer/todoSelectors';

const AddTodo = () => {
  const [newTodoName, setNewTodoName] = useState('');
  const todoItems = useSelector(todoItemsSelector);
  const { isLoading, isError } = useSelector((state) => state.todo.apistatus);

  const dispatch = useDispatch();
  const handleInput = ({ target }) => setNewTodoName(target.value.trim());

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
    <div className="border-b w-full items-center flex border-neutral-300">
      <input
        type="text"
        disabled={isLoading}
        maxLength={30}
        onChange={handleInput}
        onKeyPress={handleEnterPress}
        value={newTodoName}
        className="w-11/12 outline-none p-5 text-lg rounded text-primary-500"
        placeholder="Type New Todo"
      />
      {isLoading && <span className="pr-3">Loading..</span>}
      {isError && <span className="pr-3">{isError}</span>}
    </div>
  );
};
export default AddTodo;
