import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center
        h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Vijay Kumar</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a MERN Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
            Innovative CSE graduate with expertise in Big Data and Cloud Computing, passionate about building scalable solutions using modern DevOps and full-stack technologies.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                <Link 
                 to="work" 
                 smooth={true} 
                 duration={500} 
            >
            View Work
            </Link> 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight  className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home
