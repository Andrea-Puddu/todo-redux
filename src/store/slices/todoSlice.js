import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: uuidv4(),
        task: action.payload,
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
    deleteTodo(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    deleteAllTodos(state, action) {
      return initialState;
    },
  },
});

export const {addTodo, toggleComplete, toggleEditMode, deleteTodo, deleteAllTodos} =
  todoSlice.actions;

export const todoReducer = todoSlice.reducer;

// const addNewTodo = (term) => {
//   const updatedTodo = [
//     ...todoSlice,
//     {
//       id: uuidv4(),
//       task: term,
//       completed: false,
//     },
//   ];

//   setTodos(updatedTodo);
// };

// const toggleComplete = (id) => {
//   setTodos(todos.map((todo) => (todo.id === id ? {...todo, completed: !todo.completed} : todo)));
// };

// const initialState = {
//   todos: [],
// };

// const todoSlice = createSlice({
//   name: todo,
//   initialState,
//   reducers: {
//     // add todo to array
//     addTodo(state, action) {
//       const todo = {
//         id: uuidv4(),
//         task: action.payload, // term from input
//         completed: false,
//         editMode: false,
//       };

//       state.todos.push(todo);
//     },

//     // modify completed property based on ID
//     toggleComplete(state, action) {
//       const todo = state.todos.find((todo) => todo.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },

//     // modify editMode property based on ID
//     toggleEditMode(state, action) {
//       const todo = state.todos.find((todo = todo.id === action.payload));
//       if (todo) {
//         todo.editMode = !todo.EditMode;
//       }
//     },

//     // delete todo based on ID
//     deleteTodo(state, action) {
//       const index = state.todos.indexOf(action.payload);
//       state.todos.splice(index, 1);
//     },

//     // delete all todos
//     deleteAllTodos(state, action) {
//       state.todos = initialState.todos;
//     },
//   },
// });
