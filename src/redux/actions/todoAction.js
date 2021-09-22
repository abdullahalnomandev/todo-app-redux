export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payLod: todo,
  };
};

const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payLod: todoId,
  };
};

const toggleTodo = (toggleTodo) => {
  return {
    type: TOGGLE_TODO,
    payLod: toggleTodo,
  };
};

export { addTodo, deleteTodo, toggleTodo };
