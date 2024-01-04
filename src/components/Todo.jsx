import {TrashIcon, PencilSquareIcon, CheckCircleIcon} from '@heroicons/react/24/solid';
import {useDispatch} from 'react-redux';
import {deleteTodo, toggleComplete, toggleEditMode} from '../store';

const Todo = ({todo: {id, task, completed}}) => {
  const dispatch = useDispatch();

  return (
    <div className='flex justify-between items-center gap-2 w-full border border-secondary uppercase py-2 px-4 rounded-lg shadow-md mb-5 last:m-0  '>
      <p
        onClick={() => dispatch(toggleComplete(id))}
        className={`min-w-[100px] break-words ${completed && ' line-through'}`}
      >
        {task}
      </p>
      <div className=' flex justify-center items-center gap-2 text-gray-700'>
        <CheckCircleIcon
          onClick={() => dispatch(toggleComplete(id))}
          className={`${completed && 'text-primary'} w-8 h-8`}
        />
        <PencilSquareIcon onClick={() => dispatch(toggleEditMode(id))} className=' w-8 h-8 ' />
        <TrashIcon onClick={() => dispatch(deleteTodo(id))} className=' w-8 h-8 ' />
      </div>
    </div>
  );
};

export default Todo;
