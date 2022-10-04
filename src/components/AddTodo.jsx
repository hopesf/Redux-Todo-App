const AddTodo = () => {
  return (
    <div className="border-b border-neutral-300">
      <input
        type="text"
        maxLength={70}
        className="w-full outline-none p-5 text-lg rounded text-primary-500"
        placeholder="Type New Todo"
      />
    </div>
  );
};
export default AddTodo;
