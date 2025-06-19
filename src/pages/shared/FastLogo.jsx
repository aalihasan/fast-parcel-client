import React from 'react';

import logo from '../../assets/image/logo.png'
const FastLogo = () => {
  return (
    <div className='flex items-end'>
      <img className='mb-2' src={logo} alt="" />
      <p className='text-3xl -ml-4 font-extrabold'>FastParcel</p>
    </div>
  );
};

export default FastLogo;