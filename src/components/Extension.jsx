import React, { useState } from 'react';
import chrome from '../assets/logo-chrome.svg'
import firefox from '../assets/logo-firefox.svg'
import opera from '../assets/logo-opera.svg'
import dot from '../assets/bg-dots.svg'


const Extension = () => {
  return (
    <div className="w-full bg-white relative ">
      <div className='container max-w-full flex flex-col items-center justify-center lg:px-40 text-center'>
        <h1 className='font-bold text-2xl tracking-wider'>Download the extension</h1>
        <p className='max-w-xl mx-auto px-10 md:px-4 py-6 text-gray-500 text-md'>
           We’ve got more browsers in the pipeline. Please do let us know if you’ve 
           got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className='flex flex-col items-center md:flex-row justify-center px-10 max-w-full mx-auto gap-8 lg:px-40 mb-20'>
         {/* chrome-card */}
         <div className='flex flex-col items-center text-center py-6 rounded-2xl shadow-cust'>
            <img className='py-6' src={chrome} alt="" />
            <h2 className=''>Add to Chrome</h2>
            <p className='text-gray-500 text-sm'>Minimum version 62</p>
            <img className='py-6' src={dot} alt="" />
            <a className='py-3 px-6 bg-cust text-white text-sm rounded-sm' href="">Add & Install Extension</a>
         </div>
         {/* firefox-card */}
           <div className='flex flex-col items-center text-center py-6 rounded-2xl shadow-cust md:mt-15'>
            <img className='py-6' src={firefox} alt="" />
            <h2 className=''>Add to Firefox</h2>
            <p className='text-gray-500 text-sm'>Minimum version 55</p>
            <img className='py-6' src={dot} alt="" />
            <a className='py-3 px-6 bg-cust text-white text-sm rounded-sm' href="">Add & Install Extension</a>
         </div>
         {/* opera-card */}
            <div className='flex flex-col items-center text-center py-6 rounded-2xl shadow-cust md:mt-30'>
            <img className='py-6' src={opera} alt="" />
            <h2 className=''>Add to Opera</h2>
            <p className='text-gray-500 text-sm'>Minimum version 46</p>
            <img className='py-6' src={dot} alt="" />
            <a className='py-3 px-6 bg-cust text-white text-sm rounded-sm' href="">Add & Install Extension</a>
         </div>
      </div>
      </div>
  );
};

export default Extension;

 



