import AddTodo from './AddTodo';
import Footer from './Footer';
import ListTodos from './ListTodos';

const Box = () => {
  return (
    <div className="w-full md:w-4/6  xl:w-3/6 2xl:w-3/12  mx-auto bg-white border border-neutral-300 shadow rounded">
      <AddTodo />
      <ListTodos />
      <Footer />
    </div>
  );
};
export default Box;
