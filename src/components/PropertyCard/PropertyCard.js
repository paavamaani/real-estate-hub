import React from 'react';
import Slider from 'react-slick';

import { SiGooglemaps } from 'react-icons/si';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`}>
      <div className='pb-2 max-w-sm rounded overflow-hidden border border-gray-200 hover:shadow-lg cursor-pointer'>
        <div className='relative'>
          <img
            src={property.images[0]}
            alt='Property'
            className='w-full h-60'
          />
          <div className='pr-4 absolute top-0 left-0'>
            {property.recommended && (
              <span className='bg-gray-900 bg-opacity-80 text-white text-sm py-1 px-3 rounded-br'>
                Recommended
              </span>
            )}
          </div>
        </div>
        <div className='mt-2 px-4'>
          <div className='font-semibold text-lg'>{property.name}</div>
          <div className='flex justify-between items-center'>
            <p className='text-gray-500'>{property.address}</p>
            <SiGooglemaps className='text-red-500' />
          </div>
          <div className='my-1 py-1 flex justify-between text-center'>
            <div>
              <p className='font-semibold'>{property.beds}</p>
              <p className='text-gray-500'>Beds</p>
            </div>
            <div>
              <p className='font-semibold'>{property.bath}</p>
              <p className='text-gray-500'>Bath</p>
            </div>
            <div>
              <p className='font-semibold'>{property.sft}</p>
              <p className='text-gray-500'>Sq Ft</p>
            </div>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {property.tags.map((tag, index) => (
              <span
                key={index}
                className='mr-1 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'
              >
                {tag}
              </span>
            ))}
          </div>
          <div className='mt-2 text-right text-xl font-bold'>
            {property.price}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
