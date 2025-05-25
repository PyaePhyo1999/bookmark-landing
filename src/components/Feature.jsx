import React, { useState } from 'react';
import tag_img_1 from '../assets/illustration-features-tab-1.svg'
import tag_img_2 from '../assets/illustration-features-tab-2.svg'
import tag_img_3 from '../assets/illustration-features-tab-3.svg'
const Feature = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="w-full bg-white relative">

      <div className='container max-w-full pt-12 flex flex-col justify-center lg:px-40 text-center'>
        <h1 className='font-bold text-2xl tracking-wider'>Features</h1>
        <p className='max-w-xl mx-auto px-10 md:px-4 py-6 text-gray-500 text-md'>
          Our aim is to make it quick and easy for you to access your favourite websites. 
          Your bookmarks sync between your devices so you can access them on the go.
        </p>
        
      </div>

      {/* Tag head button */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:max-w-xl px-7 md:px-0 mx-auto mb-8">
        <hr className='lg:hidden w-full md:w-xl border-b-1 border-gray-300'/>
        <button 
          className={`tab-button lg:flex-1/3 py-2 border-b-0 lg:border-b-2 transition-all duration-700 ${activeTab === 0 ? 'text-black border-red-400 border-b-3' : 'text-gray-600  border-gray-300 hover:text-black'}`}
          onClick={() => handleTabClick(0)}
        >
          Simple Bookmarking
        </button>
        <hr className='lg:hidden w-full md:w-xl border-b-1 border-gray-300'/>
        <button 
          className={`tab-button lg:flex-1/3 py-2 border-b-0 lg:border-b-2 transition-all duration-700 ${activeTab === 1 ? 'text-black border-red-400 border-b-3' : 'text-gray-600 border-gray-300 hover:text-black'}`}
          onClick={() => handleTabClick(1)}
        >
          Speedy Searching
        </button>
        <hr className='lg:hidden  w-full md:w-xl border-b-1 border-gray-300'/>
        <button 
          className={`tab-button  lg:flex-1/3 py-2 border-b-0 lg:border-b-2 transition-all duration-700 ${activeTab === 2 ? 'text-black border-red-400 border-b-3' : 'text-gray-600  border-gray-300 hover:text-black'}`}
          onClick={() => handleTabClick(2)}
        >
          Easy Sharing
          
        </button>
       <hr className='lg:hidden w-full md:w-xl border-b-1 border-gray-300'/>
      </div>
       {/* tag slide brief */}
      <div className="w-full overflow-hidden">
        <div 
          className="slider flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeTab * 100}%)` }}>

          {/* Tag-1 */}  
          <div className="slide w-full flex-shrink-0 '">
            <div className='flex flex-col lg:flex-row items-center justify-between gap-20 px-7 lg:px-40 pb-20'>
            <div className='bottom-100 background w-80 h-60 md:w-120 lg:w-100 xl:w-120 bg-cust md:h-70 z-0 absolute lg:bottom-22 left-0 rounded-br-full rounded-tr-full'>
    
            </div>
              <img className='flex justify-center z-2 w-full md:w-2/3 lg:w-1/2 ' src={tag_img_1} alt="" />
              <div className='brief flex flex-col items-center lg:items-baseline lg:py-20 lg:px-0'>
                 <h1 className='text-center lg:text-start font-bold md:text-2xl '>
                   Bookmark in one click</h1>
                 <p className=' mt-4 text-center px-7 lg:px-0 lg:text-start text-md text-gray-500'>
                    Organize your bookmarks however you like. Our simple drag-and-drop interface 
                    gives you complete control over how you manage your favourite sites.</p>
                 <div className='btn flex mt-4 gap-2'>
                   <a className='py-3 px-6 bg-cust text-white text-sm rounded-sm' href="">More Info</a>
                 </div>  
              </div>
            </div>
           
          </div>
          {/* Tag-2 */}
            <div className="slide w-full flex-shrink-0 '">
          
            <div className='flex flex-col lg:flex-row items-center justify-between gap-20  px-7 lg:px-40 pb-24 relative'>
            <div className='bottom-80 absolute background w-80 h-60 md:w-120 lg:w-100 xl:w-120 bg-cust md:h-70 z-0 lg:bottom-16 left-0 rounded-br-full rounded-tr-full'>
    
            </div>
              <img className='flex justify-center z-2 w-full md:w-2/3 lg:w-1/2' src={tag_img_2} alt="" />
              <div className='brief flex flex-col items-center lg:items-baseline lg:py-20 lg:px-0'>
                 <h1 className='text-center lg:text-start font-bold md:text-2xl '>
                   Intelligent search</h1>
                 <p className=' mt-4 text-center px-7 lg:px-0 lg:text-start text-md text-gray-500'>
                      Our powerful search feature will help you find saved sites in no time at all. 
                      No need to trawl through all of your bookmarks.</p>
                 <div className='btn flex mt-4 gap-2'>
                   <a className='py-3 px-6 bg-cust text-white text-sm rounded-sm' href="">More Info</a>
                 </div>  
              </div>
            </div>
           {/* tag-3 */}
          </div>
            <div className="slide w-full flex-shrink-0 '">
          
            <div className='flex flex-col lg:flex-row items-center justify-between gap-20 px-7 lg:px-40 pb-24 relative'>
          <div className='bottom-85 absolute background w-80 h-60 md:w-120 lg:w-100 xl:w-120 bg-cust md:h-70 z-0 lg:bottom-16 left-0 rounded-br-full rounded-tr-full'>
    
            </div>
              <img className='flex justify-center z-2 w-full md:w-2/3 lg:w-1/2' src={tag_img_3} alt="" />
              <div className='brief flex flex-col items-center lg:items-baseline lg:py-20 lg:px-0'>
                 <h1 className='text-center lg:text-start font-bold md:text-2xl '>
                    Share your bookmarks</h1>
                 <p className=' mt-4 text-center px-7 lg:px-0 lg:text-start text-md text-gray-500'>
                    Easily share your bookmarks and collections with others. Create a shareable 
                    link that you can send at the click of a button.</p>
                 <div className='btn flex mt-4 gap-2'>
                   <a className='py-3 px-6 bg-cust text-white text-sm rounded-sm' href="">More Info</a>
                 </div>  
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

 



