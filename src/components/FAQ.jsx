import React, { useState } from 'react';
import arrow from '../assets/icon-arrow.svg';
import data from '../components/utils/FAQdata.jsx';

const FAQ = () => {
  const [activeQ, setActiveQ] = useState(data[0].id);

  const toggleQ = (id) => {
    setActiveQ(activeQ === id ? null : id);
  };

  return (
    <div className="w-full bg-white relative pb-10">
      <div className='container max-w-full flex flex-col items-center justify-center lg:px-40 text-center'>
        <h1 className='font-bold text-2xl tracking-wider'>Frequently Asked Questions</h1>
        <p className='max-w-xl mx-auto px-10 md:px-4 py-6 text-gray-500 text-md'>
          Here are some of our FAQs. If you have any other questions you'd like 
          answered please feel free to email us.
        </p>
      </div>

      <div className='w-full max-w-xl px-10 md:px-0 mx-auto' id='chapters'>
        {data.map((data) => (
          <div key={data.id} className="border-t border-gray-300 overflow-hidden">
            <h2 className="w-full">
              <button 
                onClick={() => toggleQ(data.id)}
                className="flex items-center justify-between w-full p-4 text-left hover:text-softRed transition-colors"
                aria-expanded={activeQ === data.id}
              >
                <span className='text-md hover:text-red-200 my-2'>{data.title}</span>
                <img 
                  src={arrow} 
                  alt="arrow icon"
                  className={`transition-transform duration-300 ${activeQ === data.id ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>
            </h2>
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeQ === data.id 
                  ? 'max-h-screen opacity-100 pb-4 px-4' 
                  : 'max-h-0 opacity-0'
              }`}
              aria-hidden={activeQ !== data.id}
            >
              <p className='text-gray-500 text-sm'>{data.ans}</p>
            </div>
          </div>
        ))}
        <div className='btn  my-12 text-center'>
                   <a className='py-4 px-6 bg-cust text-white text-sm rounded-sm' href="">More Info</a>
        </div>  
      </div>
      
    </div>
  );
};

export default FAQ;