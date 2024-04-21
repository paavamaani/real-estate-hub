import React, { useEffect, useState } from 'react';
import { FiX, FiFilter } from 'react-icons/fi';

const FilterBar = ({ onChangeFilter }) => {
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState('sort');
  const [beds, setBeds] = useState('beds');
  const [isTownHouse, setIsTownHouse] = useState(false);
  const [isIndividualHouse, setIsIndividualHouse] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onChangeFilter({
      location: location,
      sort: sort,
      beds: beds,
      isTownHouse: isTownHouse,
      isIndividualHouse: isIndividualHouse,
    });
  }, [location, sort, beds, isTownHouse, isIndividualHouse]);

  const onSubmitLocation = (ev) => {
    ev.preventDefault();

    console.log('Searching with filters:', {
      location,
      sort,
      beds,
      isTownHouse,
      isIndividualHouse,
    });
  };

  return (
    <div className='relative m-1 md:px-40 py-1 flex justify-between items-center border-b bg-slate-50 border-slate-100'>
      <form className='flex-1 m-2' onSubmit={onSubmitLocation}>
        <input
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder='Enter location'
          className='flex-1 mr-2 p-1 border border-gray-300 outline-none focus:border-gray-900 rounded'
        />
        <button
          type='submit'
          className='px-2 py-1 bg-gray-900 text-slate-50 hover:bg-gray-800 cursor-pointer rounded'
        >
          Search
        </button>
      </form>
      <button className='m-2 md:hidden' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FiX className='h-6 w-6' />
        ) : (
          <FiFilter className='h-6 w-6' />
        )}
      </button>
      <div
        className={`${
          isOpen
            ? 'p-4 absolute block top-10 right-0 gap-2 w-2/4 bg-white shadow-md rounded z-10'
            : 'hidden md:flex justify-between gap-8'
        }`}
      >
        <label className='flex items-center space-x-1'>
          <input
            type='checkbox'
            checked={isTownHouse}
            onChange={(e) => setIsTownHouse(e.target.checked)}
          />
          <span>Town House</span>
        </label>
        <label className='flex items-center space-x-1'>
          <input
            type='checkbox'
            checked={isIndividualHouse}
            onChange={(e) => setIsIndividualHouse(e.target.checked)}
          />
          <span>Individual House</span>
        </label>
        <select
          className='my-1 px-2 py-1 border border-gray-300 rounded'
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value='sort'> Sort By </option>
          <option value='price'> Price </option>
          <option value='rating'> Distance </option>
        </select>
        <select
          className='my-1 px-2 py-1 border border-gray-300 rounded'
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
        >
          <option value='beds'> Beds </option>
          <option value='1 bed 1 bath'> 1 bed 1 bath </option>
          <option value='2 bed 2 bath'> 2 bed 2 bath </option>
          <option value='3 bed 3 bath'> 3 bed 3 bath </option>
          <option value='more'> More </option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
