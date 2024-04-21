import React from 'react';
import Finder from '../Finder/Finder';

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <img
        className='m-8 md:w-[60%]'
        src='https://cdn.tollbrothers.com/sites/comtollbrotherswww/home/heroImages/20-Flora-At-Morrison-Ranch-in-Gilbert-AZ_1920.jpg'
        alt='Home'
      />
      <div className='w-full flex flex-col justify-center items-center'>
        <h2 className='mb-8 text-4xl'> Find your dream home </h2>
        <Finder />
      </div>
    </div>
  );
};

export default Home;
