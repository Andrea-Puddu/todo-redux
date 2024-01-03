import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../store';

const TodoForm = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!term) return;
    dispatch(addTodo(term));
    setTerm('');
  };

  return (
    <form onSubmit={handleFormSubmit} className=' w-full flex gap-4 items-center my-8'>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type='text'
        placeholder='What is your task today?'
        className='input input-bordered input-secondary flex-1 w-full'
      />
      <button type='submit' className='btn btn-secondary'>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
