import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import {  HiMenu, HiOutlineX } from "react-icons/hi";
import logo from '../../assets/logo/logo-bibian.png'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const lists = [
    {
      name:"VFX",
      link:'services/vfx'
    },
    {
      name:"ANIMATION & CGI",
      link:'services/3danimation&cgi'
    },
    {
      name:"AR/VR",
      link:'services/ar/br'
    },
    {
      name:"Video Editing, Motion Graphics & Thumbnail",
      link: '/sercices/video-editing&motion-graphics&thumbnail'
    }
  ]
  
  return (
    <nav className='px-5 py-4 shadow-lg bg-grey  md:flex md:items-center md:justify-between sticky top-0 z-10'> 
      <div className='flex justify-between items-center'>
        <Link to='/' className='text-4xl text-gray-400 font-[poppins] cursor-pointer'>
          <img src={logo} className='w-11 rounded-full' alt="" />
        </Link>
        <div onClick={() => setOpen(!open)} name="menu" className='md:hidden  text-black text-3xl cursor-pointer '>
          {
            open ? <HiOutlineX className='text-white'></HiOutlineX>
              :
              <HiMenu className='text-white'></HiMenu>
          }

        </div>

      </div>
      <ul id='list-item' className={`md:flex  w-full absolute left-0 items-center transition-all top-20 ease-in md:static md:w-auto duration-500 bg-[#252525] ${open ? 'top-20' : 'top-[-490px]'}`}>

        <li className='px-4  my-6 md:my-0'>
          <Link className='text-white flex items-center '>
            HOME
          </Link>
        </li>
        <li className='px-4 my-6 md:my-0 w-full relative'>
          <Link  onClick={()=> setIsOpen((prev)=> !prev)} className='text-white flex items-center '>
            SERVICES
          {
            isOpen && <div className='w-full absolute top-8 rounded'>{lists.map((list,i)=>(
              <h3 className='bg-grey text-white border-b-2 ps-2' style={{width:'170px'}} key={i}><Link className='text-white' to={list.link}  > <span className='text-white hover:text-messenger'>{list.name}</span> </Link></h3>
            ))}</div>
          }
          </Link>
        </li>
        <li className='px-4 my-6 md:my-0 '>
          <Link to={'/blog'} className='text-white flex items-center '>
            BLOG
          </Link>
        </li>
        
        <li className='px-4 my-6 md:my-0'>
          <Link to={'/about'} className='text-white flex items-center '>
            ABOUT
          </Link>
        </li>
        <li className='px-4 my-6 md:my-0'>
          <Link to={'/contact'} className='text-white flex items-center '>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;