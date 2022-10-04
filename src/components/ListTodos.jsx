import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeChecked } from '../redux/todoSlicer/todoSlicer';

const ListTodos = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoItems);

  const handleRadioButton = (el) => {
    let hazirla = { title: el.title, isChecked: !el.isChecked };
    dispatch(changeChecked(hazirla));
  };

  return (
    <div className="flex flex-col w-full h-[500px] scrollbar-hide overflow-y-auto">
      {todoList?.map((el) => (
        <div
          key={el.title}
          onClick={() => handleRadioButton(el)}
          className="flex py-5 px-2 items-center space-x-5 border-b border-neutral-300 hover:bg-primary-100 cursor-pointer"
        >
          <input
            type="radio"
            checked={el.isChecked}
            onClick={() => handleRadioButton(el)}
            className="w-12 h-8 outline-none border accent-primary-500 cursor-pointer"
          />
          <span className={`text-md font-normal text-neutral-700 tracking-wider ${el.isChecked && 'line-through'}`}>
            {el.title}
          </span>
        </div>
      ))}
    </div>
  );
};
export default ListTodos;
