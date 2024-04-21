import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='px-20 py-4 border-b border-slate-100 flex justify-between items-center'>
      <h2 className='text-xl text-gray-900'> Real Estate Hub </h2>
      <ul className='list-none flex'>
        <li className='mx-4 px-4 bg-gray-900 text-white rounded-md py-2 text-sm'>
          <Link to='/'> Home </Link>
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
