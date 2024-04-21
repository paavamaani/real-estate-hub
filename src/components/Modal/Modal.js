import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-4 rounded-lg shadow-lg'>
        {children}

        <div className='text-center'>
          <button
            className='mt-4 px-4 py-1 bg-gray-900 text-slate-50 rounded hover:bg-gray-800'
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
