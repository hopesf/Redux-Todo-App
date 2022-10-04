import Box from './components/Box';

const App = () => {
  return (
    <div className="w-full h-screen bg-neutral-100 flex flex-col space-y-4 items-center justify-center">
      <h2 className="text-5xl font-light tracking-wider text-primary-400 pb-5">Todo App With Redux</h2>
      <Box />
    </div>
  );
};
export default App;
