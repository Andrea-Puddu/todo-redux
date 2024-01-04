import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

const initialState = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: uuidv4(),
        task: action.payload.trim(),
        editMode: false,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    toggleEditMode(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.editMode = !todo.editMode;
      }
    },
    editTodoTask(state, action) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.editMode = !todo.editMode;
        todo.task = action.payload.term;
      }
    },
    deleteTodo(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    deleteAllTodos() {
      return initialState;
    },
  },
});

export const {addTodo, toggleComplete, toggleEditMode, editTodoTask, deleteTodo, deleteAllTodos} =
  todoSlice.actions;

export const todoReducer = todoSlice.reducer;
