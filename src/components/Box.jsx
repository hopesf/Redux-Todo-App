import AddTodo from './AddTodo';
import Footer from './Footer';
import ListTodos from './ListTodos';

const Box = () => {
  return (
    <div className="w-2/6 mx-auto bg-white border border-neutral-300 shadow rounded">
      <AddTodo />
      <ListTodos />
      <Footer />
    </div>
  );
};
export default Box;
