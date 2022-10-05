import { useSelector, useDispatch } from 'react-redux';
import { changeChecked, filteredSelector, removeItem } from '../redux/todoSlicer/todoSlicer';
import CloseIcon from './CloseIcon';

const ListTodos = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(filteredSelector);

  const handleRadioButton = ({ title, isChecked }) => {
    dispatch(changeChecked({ title, isChecked }));
  };

  const handleRemove = (el) => {
    dispatch(removeItem(el));
  };

  return (
    <div className="flex flex-col w-full h-[500px] scrollbar-hide overflow-y-auto">
      {filtered?.map((el) => (
        <div
          key={el.title}
          className="flex items-center justify-between  border-b border-neutral-300 hover:bg-primary-100 cursor-pointer"
        >
          <div className="flex py-5 px-2 items-center w-full space-x-5" onClick={() => handleRadioButton(el)}>
            <input
              type="radio"
              checked={el.isChecked}
              onChange={() => handleRadioButton(el)}
              className="w-12 h-8 outline-none border accent-primary-500 cursor-pointer"
            />
            <span className={`text-md font-normal text-neutral-700 tracking-wider ${el.isChecked && 'line-through'}`}>
              {el.title}
            </span>
          </div>

          <div className="py-5 px-2" onClick={() => handleRemove(el)}>
            <CloseIcon />
          </div>
        </div>
      ))}
      {!filtered?.length && (
        <span className="w-full text-center leading-10 font-light text-neutral-500 h-full flex items-center justify-center text-4xl">
          Before using the application,
          <br /> please add a todo!.
        </span>
      )}
    </div>
  );
};
export default ListTodos;
