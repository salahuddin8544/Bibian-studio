import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { HiLogin, HiMenu, HiOutlineX, HiShoppingCart } from "react-icons/hi";
import { FaSignOutAlt, FaSignInAlt, FaHome, FaRProject, FaBloggerB, FaCloudDownloadAlt, FaQuestionCircle, FaUserFriends } from "react-icons/fa";
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
      name:"Animation & CGI",
      link:'services/3danimation&cgi'
    },
    {
      name:"AR/VR",
      link:'services/ar/br'
    }
  ]
  
  return (
    <nav className='p-5 shadow-lg bg-gray  md:flex md:items-center md:justify-between sticky top-0 z-10'> 
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
      <ul id='list-item' className={`md:flex  w-full absolute left-0 items-center transition-all top-20 ease-in md:static md:w-auto duration-500 ${open ? 'top-20' : 'top-[-490px]'}`}>

        <li className='mx-4  my-6 md:my-0'>
          <Link className='text-white flex items-center '>
          <FaHome className='me-1'></FaHome>
            Home
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0 w-full relative'>
          <h3  onClick={()=> setIsOpen((prev)=> !prev)} className='text-white flex items-center '>
          <FaRProject className='me-1'></FaRProject>
            Services
          {
            isOpen && <div className='w-full absolute top-8 rounded'>{lists.map((list,i)=>(
              <h3 className='bg-white border-b-2 ps-2' style={{width:'170px'}} key={i}><Link to={list.link} className=''  >{list.name}</Link></h3>
            ))}</div>
          }
          </h3>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to={'/blog'} className='text-white flex items-center '>
          <FaBloggerB className='me-1'></FaBloggerB>
            Blog
          </Link>
        </li>
        
        <li className='mx-4 my-6 md:my-0'>
          <Link to={'/about'} className='text-white flex items-center '>
            <FaUserFriends className='me-1'></FaUserFriends>
            About
          </Link>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <Link to={'/contact'} className='text-white flex items-center '>
            <FaQuestionCircle className='me-1'></FaQuestionCircle>
            Contact
          </Link>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;