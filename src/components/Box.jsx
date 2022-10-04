import ListTodos from './ListTodos';

const Box = () => {
  return (
    <div className="w-2/6 mx-auto bg-white border border-neutral-300 shadow rounded">
      <div className="border-b border-neutral-300">
        <input
          type="text"
          maxLength={70}
          className="w-full outline-none p-5 text-lg rounded text-primary-500"
          placeholder="Type New Todo"
        />
      </div>

      <ListTodos />

      <div className="flex w-full justify-between py-4 items-center px-3 border-t border-neutral-300">
        <span className="text-md text-primary-500 font-normal tracking-wider"> 1 Items left</span>

        <div className="space-x-4">
          <span className="text-md font-normal text-neutral-500 rounded tracking-wider border px-3 py-1.5 cursor-pointer hover:border-primary-500 hover:text-primary-500">
            All
          </span>
          <span className="text-md font-normal text-neutral-500 rounded tracking-wider border px-3 py-1.5 cursor-pointer hover:border-primary-500 hover:text-primary-500">
            Active
          </span>
          <span className="text-md font-normal text-neutral-500 rounded tracking-wider border px-3 py-1.5 cursor-pointer hover:border-primary-500 hover:text-primary-500">
            Completed
          </span>
        </div>

        <span className="text-md font-normal text-neutral-500 tracking-wider hover:text-primary-500 cursor-pointer">
          Clear Completed
        </span>
      </div>
    </div>
  );
};
export default Box;
