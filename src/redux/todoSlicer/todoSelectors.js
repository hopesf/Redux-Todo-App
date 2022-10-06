/* selectors */
export const todoItemsSelector = (state) => state.todo.todoItems;
export const activeFilterSelector = (state) => state.todo.activeFilter;
export const filteredSelector = ({ todo }) => {
  if (todo.activeFilter === 'all') {
    return todo.todoItems;
  }

  return todo.todoItems.filter((todd) =>
    todo.activeFilter === 'active' ? todd.isChecked == false : todd.isChecked == true
  );
};
