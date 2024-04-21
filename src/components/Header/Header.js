import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='px-5 py-4 border-b border-slate-100 flex justify-between items-center md:px-20'>
      <Link to='/'>
        <h2 className='text-xl text-gray-900'>Real Estate Hub</h2>
      </Link>
      <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX className='h-6 w-6' /> : <FiMenu className='h-6 w-6' />}
      </button>
      <ul
        className={`flex-col md:flex-row list-none md:flex ${
          isOpen
            ? 'p-2 flex top-12 right-0 shadow-md rounded m-2 z-10'
            : 'hidden'
        } absolute md:relative bg-white w-3/4 md:w-auto`}
      >
        <li className='mx-4 px-4 bg-gray-900 text-white rounded-md py-2 text-sm'>
          <Link to='/'>Home</Link>
        </li>
        <li className='mx-4 px-4 py-2 text-gray-900 hover:bg-gray-900 hover:text-slate-50 rounded-md text-sm cursor-pointer'>
          About
        </li>
        <li className='mx-4 px-4 py-2 text-gray-900 hover:bg-gray-900 hover:text-slate-50 rounded-md text-sm cursor-pointer'>
          Help
        </li>
      </ul>
    </div>
  );
};

export default Header;
