import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {editTodoTask} from '../store';

const TodoEditForm = ({todo: {task, id}}) => {
  const [term, setTerm] = useState(task);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!term) return;
    dispatch(editTodoTask({id, term}));
    setTerm('');
  };

  return (
    <form onSubmit={handleFormSubmit} className=' w-full flex gap-4 items-center my-8'>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type='text'
        className='input input-bordered input-secondary flex-1 w-full'
      />
      <button type='submit' className='btn btn-secondary'>
        Edit
      </button>
    </form>
  );
};

export default TodoEditForm;
