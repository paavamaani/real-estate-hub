import React from 'react';

import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='p-20 grid grid-cols-2 md:grid-cols-3 text-sm border-t border-slate-100'>
      <div className='md:mr-28 col-span-2 md:col-span-1'>
        <h2 className='font-semibold'> Real Estate Hub </h2>
        <p className='mt-8 text-gray-500'>
          We offer exceptional experiences and best deals on properties for our
          customers.
        </p>
        <div className='mt-8 pr-28 flex justify-between'>
          <AiOutlineFacebook size='25px' />
          <AiOutlineInstagram size='25px' />
          <AiOutlineTwitter size='25px' />
          <AiOutlineGithub size='25px' />
        </div>
      </div>
      <div className='col-span-2 md:col-span-1 my-4 flex justify-between'>
        <div className='md:mx-20'>
          <p className='mt-4 font-semibold'> Solutions </p>
          <p className='mt-4 text-gray-500'> Purchase </p>
          <p className='mt-4 text-gray-500'> Lease </p>
          <p className='mt-4 text-gray-500'> Auction </p>
        </div>
        <div className='md:mx-20'>
          <p className='mt-4 font-semibold'> Support </p>
          <p className='mt-4 text-gray-500'> Pricing </p>
          <p className='mt-4 text-gray-500'> Features </p>
        </div>
      </div>
      <div className='col-span-2 md:col-span-1 my-4 flex justify-between'>
        <div className='md:mx-20'>
          <p className='mt-4 font-semibold'> Company </p>
          <p className='mt-4 text-gray-500'> About </p>
          <p className='mt-4 text-gray-500'> Careers </p>
        </div>
        <div className='md:mx-20'>
          <p className='mt-4 font-semibold'> Legal </p>
          <p className='mt-4 text-gray-500'> Privacy </p>
          <p className='mt-4 text-gray-500'> Terms </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
