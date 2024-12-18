import React from 'react'
import { FaBars,FaTimes,FaGithub,FaLinkedin, FaFacebook } from "react-icons/fa"
import Logo from "../assets/img.png";
import { useState } from "react";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav,setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]
    text-gray-300'>
        <div className='flex items-center'>
            <img src={Logo} alt="" style={{width: '100px',}}/>
        </div>
        {/*menu */}
          <ul className='hidden md:flex'>
            <li>
            <Link 
                 to="home" 
                 smooth={true} 
                 duration={500} 
            >
            Home
            </Link>
            </li>
            <li>
            <Link 
                 to="about" 
                 smooth={true} 
                 duration={500} 
            >
            About
            </Link>
            </li>
            <li>
            <Link 
                 to="skills" 
                 smooth={true} 
                 duration={500} 
            >
            Skills
            </Link>
            </li>
            <li>
            <Link 
                 to="work" 
                 smooth={true} 
                 duration={500} 
            >
            Work
            </Link>
            </li>
            <li>
            <Link 
                 to="contact" 
                 smooth={true} 
                 duration={500} 
            >
            Contact
            </Link>
            </li>
          </ul>

        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/*Mobile menu*/}
        <ul className={
          !nav ? 'hidden' 
          : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
          }
        >
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                Work
              </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                Contact
              </Link>
            </li>
        </ul>

        {/*Social icons*/}
        <div className=' hidden lg:flex flex-col fixed top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href='http://www.linkedin.com/in/vijay-kumar-varma100' target='_blank'>LinkedIn <FaLinkedin size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href='https://github.com/Vijay-KV09' target='_blank'>Github <FaGithub size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#008080]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href='mailto:vkvpenmatsa803@gmail.com' target='_blank'>Mail <HiOutlineMail size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000080]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href='https://github.com/Vijay-KV09/resume/blob/main/Resume1.pdf' download target='_blank'>Resume <BsFillPersonLinesFill size={30}/></a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
