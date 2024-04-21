import React from 'react';

const ImageGrid = ({ property }) => {
  return (
    <div className='grid grid-cols-8 gap-1'>
      <div className='relative h-[500px] col-span-8 md:col-span-5'>
        <img
          src={property.images[0]}
          alt='Main'
          className='w-full h-full rounded-lg object-cover'
        />
        {property.recommended && (
          <span className='absolute top-2 left-2 bg-gray-900 bg-opacity-80 text-white text-sm py-1 px-3 rounded'>
            Recommended
          </span>
        )}
      </div>
      <div className='relative h-[500px] col-span-8 md:col-span-3 grid grid-rows-2 grid-cols-2 gap-1'>
        <img
          src={property.images[1]}
          alt='Sub1'
          className='w-full h-full rounded-lg object-cover'
        />
        <img
          src={property.images[2]}
          alt='Sub2'
          className='w-full h-full rounded-lg object-cover'
        />
        <img
          src={property.images[3]}
          alt='Sub3'
          className='w-full h-full rounded-lg object-cover'
        />
        <img
          src={property.images[4]}
          alt='Sub4'
          className='w-full h-full rounded-lg object-cover'
        />
        <div className='px-2 py-1 absolute bottom-2 right-2 text-sm font-semibold rounded flex items-center bg-white border border-gray-900'>
          <img
            className='mr-2'
            width='24'
            height='24'
            src='https://img.icons8.com/material-outlined/24/image.png'
            alt='image'
          />
          <span> View All </span>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
