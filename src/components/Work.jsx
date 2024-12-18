import React from 'react'
import WorkImg from "../assets/projects/workImg.jpeg";
import realEstate from "../assets/projects/realestate.jpg";

const Work = () => {
  return (
    <div name='work' className='mt-[100px] w-full md:h-screen text-gray-300 bg-[#0a192f] '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
            <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* Container */}
      <div 
      className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'
      >
        {/*Grid item */}
        <div 
        className='shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Application
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://github.com/Vijay-KV09/Random-Quote-Gen" target='blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div 
        className='shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    MERN Application
                </span>
                <div className='pt-8 text-center'>
                <a href="https://github.com/Vijay-KV09/CRUD_Application" target="blank">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div 
        className='shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className= 'hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    [WebScrapping]
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://github.com/Vijay-KV09/Web_Scrapping-BeautifulSoup" target="blank">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div 
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    Weather Application
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://github.com/Vijay-KV09/weather" target='blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Work
