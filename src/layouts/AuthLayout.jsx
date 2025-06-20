import React from 'react';
import { Outlet } from 'react-router';

import authImg from '../assets/image/authImage.png'
import FastLogo from '../pages/shared/FastLogo';

const AuthLayout = () => {
  return (
    <div className="p-12 bg-base-200 ">
      <div>
        <FastLogo></FastLogo>
      </div>
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <div className='flex-1'>
          <img src={authImg} className="max-w-sm rounded-lg " />
        </div>
        <div className="flex-1 b">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;