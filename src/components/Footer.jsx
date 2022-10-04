import { useSelector, useDispatch } from 'react-redux';
import { changeActiveFilter, clearCompleted } from '../redux/todoSlicer/todoSlicer';

const Footer = () => {
  const dispatch = useDispatch();
  const itemsLength = useSelector((state) => state.todo.todoItems.filter((el) => el.isChecked === false));

  const activeFilter = useSelector((state) => state.todo.activeFilter);

  const handleClear = () => {
    dispatch(clearCompleted());
  };

  const handleChangeFilter = (newFilter) => {
    dispatch(changeActiveFilter(newFilter));
  };

  return (
    <div className="flex w-full justify-between py-4 items-center px-3 border-t border-neutral-300">
      <span className="text-sm lg:text-md text-primary-500 font-normal tracking-wider">
        {itemsLength?.length == 0 ? 'All done' : itemsLength?.length + ' Items left'}
      </span>

      <div className="xl:space-x-4 space-x-2">
        <span
          onClick={() => handleChangeFilter('all')}
          className={`text-sm xl:text-md font-normal text-neutral-500 rounded tracking-wider border px-3 py-1.5  cursor-pointer ${
            activeFilter === 'all' ? 'bg-primary-500 text-white' : 'hover:border-primary-500 hover:text-primary-500'
          }`}
        >
          All
        </span>

        <span
          onClick={() => handleChangeFilter('active')}
          className={`text-sm xl:text-md  font-normal text-neutral-500 rounded tracking-wider border px-3 py-1.5  cursor-pointer ${
            activeFilter === 'active' ? 'bg-primary-500 text-white' : 'hover:border-primary-500 hover:text-primary-500'
          }`}
        >
          Active
        </span>

        <span
          onClick={() => handleChangeFilter('completed')}
          className={`text-sm xl:text-md  font-normal text-neutral-500 rounded tracking-wider border px-3 py-1.5 cursor-pointer ${
            activeFilter === 'completed'
              ? 'bg-primary-500 text-white'
              : 'hover:border-primary-500 hover:text-primary-500'
          }`}
        >
          Completed
        </span>
      </div>

      <span
        onClick={handleClear}
        className=" text-sm xl:text-md  font-normal text-neutral-500 tracking-wider hover:text-primary-500 cursor-pointer hover:underline"
      >
        Clear Completed
      </span>
    </div>
  );
};
export default Footer;
