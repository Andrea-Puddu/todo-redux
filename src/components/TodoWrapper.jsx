import {useSelector, useDispatch} from 'react-redux';
import {deleteAllTodos} from '../store';

import TodoForm from './TodoForm';

import Todo from './Todo';
import TodoEditForm from './TodoEditForm';

const TodoWrapper = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className=' w-full sm:max-w-[640px] sm:m-auto p-8 sm:rounded-lg sm:shadow-lg'>
      <h1>Get things done!</h1>
      <TodoForm />
      {todos.length > 1 && (
        <button
          onClick={() => dispatch(deleteAllTodos())}
          className=' btn btn-block mb-5 btn-accent '
        >
          Delete All
        </button>
      )}
      {todos.map((todo) =>
        todo.editMode ? (
          <TodoEditForm key={todo.id} todo={todo} />
        ) : (
          <Todo key={todo.id} todo={todo} />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
