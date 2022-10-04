import { useSelector, useDispatch } from 'react-redux';
import { clearCompleted } from '../redux/todoSlicer/todoSlicer';

const Footer = () => {
  const itemsLength = useSelector((state) => state.todo.todoItems.filter((el) => el.isChecked === false));
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className="flex w-full justify-between py-4 items-center px-3 border-t border-neutral-300">
      <span className="text-md text-primary-500 font-normal tracking-wider">
        {itemsLength?.length == 0 ? 'All done' : itemsLength?.length + ' Items left'}
      </span>

      <div className="space-x-4">
        <span className="text-md font-normal text-neutral-500 rounded tracking-wider border px-3 py-1.5 cursor-pointer hover:border-primary-500 hover:text-primary-500">
          All
        </span>

        <span className="text-md font-normal text-neutral-500 rounded tracking-wider border px-3 py-1.5 cursor-pointer hover:border-primary-500 hover:text-primary-500">
          Completed
        </span>
      </div>

      <span
        onClick={handleClear}
        className="text-md font-normal text-neutral-500 tracking-wider hover:text-primary-500 cursor-pointer hover:underline"
      >
        Clear Completed
      </span>
    </div>
  );
};
export default Footer;
