import {useSelector} from 'react-redux';

import TodoForm from './TodoForm';

const TodoWrapper = () => {
  const todos = useSelector((state) => state.todos);

  console.log(todos);

  return (
    <div className=' w-full sm:max-w-[640px] sm:m-auto p-8 sm:rounded-lg sm:shadow-lg'>
      <h1>Get things done!</h1>
      <TodoForm />
    </div>
  );
};

export default TodoWrapper;
