import React, { useState } from 'react';
import logo from '../assets/logo-bookmark-bottom-nav.svg'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'

const Footer = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white relative">

      <div className='container max-w-full py-12 flex flex-col items-center bg-cust justify-center lg:px-40 text-center'>
        <p className='font-bold text-xs tracking-wider text-white'>35,000+ already joined</p>
        <h2 className='max-w-md mx-auto px-10 md:px-4 py-6 font-bold text-white text-2xl'>
           Stay up-to-date with what we’re doing
        </h2>
       <div className='flex flex-col w-full px-7 md:max-w-md md:flex-row gap-4'>
            <input type="text" name='email' className='bg-white pl-4 pr-14 rounded-sm py-3 text-gray-400 text-sm text-left placeholder:text-left' placeholder='Enter your email address'/>
           <button className='tracking-wider py-3 px-6 text-white bg-red-400 rounded-sm text-xs shadow-cust'>Contact us</button>  
       </div>
      </div>
      <div className='max-w-full bg-blue-950 py-8 px-4 lg:px-40'>
            <div className='flex flex-col gap-6 md:flex-row justify-between'>
              <div className='flex flex-col md:flex-row gap-6 md:gap-16 text-sm align-middle text-white items-center'>
                      <img className='' src={logo} alt="" />
                      <a className='tracking-wider text-shadow-lg' href="">FEATURES</a>
                      <a className='tracking-wider text-shadow-lg' href="">PRICING</a>
                      <a className='tracking-wider text-shadow-lg' href="">CONTACT</a>
              </div>
              <div className='flex gap-10 text-sm align-middle text-white justify-center items-center'>
                  <img src={facebook}alt="" />
                  <img src={twitter}alt="" />
              </div>
            </div>
        </div>
        </div>

  );
};

export default Footer;

 



