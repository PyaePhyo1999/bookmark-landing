import React, { useEffect, useState } from 'react'
import logo from '../assets/logo-bookmark.svg'
import hero from '../assets/illustration-hero.svg'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close.svg'
import logo_nav from '../assets/logo-bookmark-nav.svg'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'


const Header = () => {
  const [menuBar,setMenuBar] =useState(false)
  useEffect(()=>
  {
      if(menuBar){
        document.body.style.overflow = 'hidden'
      }
      else{
        document.body.style.overflow = 'auto'
      }
      return()=>{
        document.body.style.overflow = 'auto'
      }
  },[menuBar]
  )
  const closeMenu = () => {
    setMenuBar(false);
  };


  return (

      <div className="w-full bg-white overflow-hidden relative">
         <div className='bottom-85 md:bottom-70 background w-80 h-60 md:w-100 bg-cust md:h-70 z-0 absolute lg:bottom-30 xl:bottom-20 right-0 rounded-bl-full rounded-tl-full'>
          
          </div>
          <div className="container max-w-full min-h-screen">
           <div className='flex justify-between py-12 px-7 md:px-10 lg:px-40 items-center'>
                <img src={logo} alt="" />
                <div className='hidden md:flex gap-16 items-center text-xs text-gray-600 font-semibold'>
                    <ul className='md:flex gap-16'>
                      <a className='tracking-wider text-shadow-lg' href="">FEATURES</a>
                      <a className='tracking-wider text-shadow-lg' href="">PRICING</a>
                      <a className='tracking-wider text-shadow-lg' href="">CONTACT</a>
                    </ul>
                     <button className='tracking-wider py-3 px-8 text-white bg-red-400 rounded-sm text-xs shadow-cust'>LOGIN</button>  
                      
                </div>
                  <img src={menu} onClick={()=>setMenuBar(true)} className='md:hidden w-6 cursor-pointer' alt="" />
           </div>
          
          {/* mobile-nav */}
           <div className={`md:hidden ${menuBar ? 'translate-x-0' : 'translate-x-full' } 
          fixed w-full h-full top-0 right-0 nav-gradient overflow-hidden transform transition-transform duration-700 ease-in-out z-3`}>
      
            <div className='flex flex-col h-full  gap-4 items-center text-xs text-gray-600 font-semibold px-7 py-12'>
                    <div className='flex justify-between w-full  items-center'>
                      <img src={logo_nav} className='filter brightness-100 saturate-100 hue-rotate-180' alt="" />
                      <img src={close} onClick={closeMenu} className='cursor-pointer w-6 text-shadow-lg' alt="" />
                    </div>  

                    <ul className='flex flex-col items-center text-center w-full text-lg text-white space-y-4 py-4 mt-4 font-medium'>
                    <hr className='w-full border-t border-white/20' />
                      <li className='w-full'>
                          <a className='block tracking-wider text-shadow-lg py-2 ' href="#">
                              FEATURES
                          </a>
                      </li>
                    <hr className='w-full border-t border-white/20' />
                      <li className='w-full'>
                          <a className='block tracking-wider text-shadow-lg py-2' href="#">
                              PRICING
                          </a>
                      </li>
                    <hr className='w-full border-t border-white/20' />
                        <li className='w-full'>
                            <a className='block tracking-wider text-shadow-lg py-2' href="#">
                              CONTACT
                            </a>
                        </li>
                    <hr className='w-full border-t border-white/20' />
                    </ul>
                     <button className='tracking-wider py-3 w-full text-white rounded-sm text-lg font-medium shadow-cust border-2 border-white cursor-pointer'>LOGIN</button>  
                     <div className='flex gap-6 fixed bottom-0 items-center p-10'>
                        <img src={facebook}alt="" />
                         <img src={twitter}alt="" />
                     </div>
                </div>
          </div>


          
           <div className= 'flex flex-col-reverse items-center lg:flex-row justify-between lg:pl-40 lg:pr-20'>
                <div className='brief flex flex-col items-center lg:items-baseline pt-10 lg:py-20 mt-6 lg:px-0'>
                    <h1 className='w-96 md:w-full xl:w-xl text-center lg:text-start text-4xl font-bold md:text-5xl '>A Simple Bookmark Manager</h1>
                    <p className='xl:w-lg mt-8 text-center px-10 lg:px-0 lg:text-start text-md text-gray-500'>A clean and simple interface to organize your favourite websites. Open a new 
                      browser tab and see your sites load instantly. Try it for free.</p>
                    <div className='btn flex mt-8 gap-2 mb-2'>
                      <a className='py-3 px-6 bg-cust text-white text-sm rounded-sm' href="">Get it on Chrome</a>
                      <a className='py-3 px-6 bg-gray-50 rounded-sm text-sm shadow-cust' href="">Get it on Firefox</a>
                    </div>  
                </div>
                <img className='flex justify-center z-2 w-full md:w-4/5 lg:w-1/2 xl:max-w-3/4 lg:mt-14' src={hero} alt="" />
           </div>

           <div>

           </div>   
        </div>
 
      </div>
  )
}
 
  
  
export default Header