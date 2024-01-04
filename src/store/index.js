import {configureStore} from '@reduxjs/toolkit';

import {
  todoReducer,
  addTodo,
  toggleComplete,
  toggleEditMode,
  editTodoTask,
  deleteTodo,
  deleteAllTodos,
} from './slices/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export {store, addTodo, toggleComplete, toggleEditMode, editTodoTask, deleteTodo, deleteAllTodos};
