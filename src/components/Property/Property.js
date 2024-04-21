import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { properties } from '../../utils/mock/properties';

import ImageGrid from '../ImageGrid/ImageGrid';
import Modal from '../Modal/Modal';

const Property = () => {
  const { propertyId } = useParams();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const property = properties.find((property) => property.id == propertyId);

  const onClickApply = () => {
    setIsOpenModal(true);
  };

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <div className='m-4'>
      <div className='mb-2'>
        {property.tags.map((tag, index) => (
          <span
            key={index}
            className='mr-1 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'
          >
            {tag}
          </span>
        ))}
      </div>

      <ImageGrid property={property} />

      <div className='mx-8 md:mx-40 my-4 grid grid-rows-4 grid-cols-5 gap-4'>
        <div className='row-span-4 col-span-5 md:col-span-3'>
          <p className='text-2xl font-semibold'>{property.name}</p>
          <p className='text-gray-500'>{property.address}</p>
          <div className='my-2 py-2 text-center flex justify-between border-b border-slate-300'>
            <div>
              <p className='text-xl font-semibold'>{property.beds}</p>
              <p className='text-md text-gray-500'>Beds</p>
            </div>
            <div>
              <p className='text-xl font-semibold'>{property.bath}</p>
              <p className='text-md text-gray-500'>Bath</p>
            </div>
            <div>
              <p className='text-xl font-semibold'>{property.sft}</p>
              <p className='text-md text-gray-500'>Sq Ft</p>
            </div>
          </div>
          <div className='my-2 py-2'>
            <p className='mb-2 text-2xl font-semibold'> About </p>
            <p className='text-md text-gray-800'>{property.description}</p>
            <p className='my-1 py-1'>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
            <p className='my-1 py-1'>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
          </div>
        </div>
        <div className='mx-8 md:ml-20 row-span-2 col-span-5 md:col-span-2 flex flex-col justify-center items-center rounded border border-gray-200 top-4 sticky'>
          <p className='m-2 text-3xl'>Planning to Buy?</p>
          <p className='m-2 text-center text-2xl font-semibold'>
            {property.price}
          </p>
          <button
            onClick={onClickApply}
            className='m-2 px-4 py-2 bg-gray-900 text-slate-50 rounded'
          >
            Apply Now
          </button>
        </div>
      </div>

      <Modal isOpen={isOpenModal} onClose={toggleModal}>
        <div className='w-[300px] text-md font-semibold'>
          <label for='price'>Bid Price</label>
          <br></br>
          <input
            id='price'
            className='w-full px-2 py-1 outline-none ring-2 ring-gray-300 focus:ring focus:ring-gray-900 focus:ring-opacity-50 rounded'
            type='number'
            placeholder='Enter Bid'
          />
        </div>
      </Modal>
    </div>
  );
};

export default Property;
