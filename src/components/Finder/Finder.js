import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Finder() {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim() === '') {
      setError('Please describe your home');
      return;
    }

    setError('');

    navigate('/properties');
  };

  const onChangeText = (ev) => {
    setError('');
    setText(ev.target.value);
  };

  return (
    <form className='w-96 text-center' onSubmit={handleSubmit}>
      <textarea
        className={`${
          error && 'border-red-500 '
        }, w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-gray-900 focus:ring-opacity-50 resize-none overflow-auto outline-none`}
        placeholder='Describe your home'
        rows='3'
        value={text}
        onChange={(ev) => onChangeText(ev)}
      />
      {error && <p className='text-left text-red-500 text-sm'>{error}</p>}
      <button
        type='submit'
        className='mt-2 px-4 py-2 bg-gray-900 text-slate-50 rounded-md hover:bg-slate-800'
      >
        Submit
      </button>
    </form>
  );
}

export default Finder;
