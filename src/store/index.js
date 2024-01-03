import {configureStore} from '@reduxjs/toolkit';

import {
  todoReducer,
  addTodo,
  toggleComplete,
  toggleEditMode,
  deleteTodo,
  deleteAllTodos,
} from './slices/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export {store, addTodo, toggleComplete, toggleEditMode, deleteTodo, deleteAllTodos};
