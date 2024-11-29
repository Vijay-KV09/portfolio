import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div>
                        <p className='sm:text-right text-4xl font-bold pl-4'>
                            Hi. I'm Vijay,nice to meet you. Please take a look around.
                        </p>
                    </div>
                    <div>
                        <p>I am a Computer Science and Engineering graduate with a specialization in Big Data, driven by a passion for solving complex challenges. My expertise spans DevOps, Cloud Computing, and Full-Stack Development, enabling me to build scalable, high-performance solutions</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About
