import React from 'react';
import { FaCopyright, FaFacebook,  FaInstagram, FaLinkedin, FaTwitter, FaVimeo, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='py-2 absolute h-28  flex justify-center items-center  w-full bg-grey '>
          <div>
          <div className='flex gap-x-4    mx-auto  '>
           <Link to={`https://www.facebook.com/officialvivianstudios`} target='_blank' > <FaFacebook className='w-7 h-7 duration-200 p-0.5 text-[#808080] hover:text-white   rounded-full border-none  cursor-pointer'></FaFacebook> </Link>
            
            <Link to={'https://www.youtube.com/channel/UC8PqF-MmQsQ9aoByfhyzZJg'} target='_blank'> <FaYoutube className='w-7 h-7 duration-200 p-0.5 text-[#808080] hover:text-white   rounded-full border-none  cursor-pointer'/> </Link>

          <Link to={'https://www.instagram.com/vivian.studios/'} target='_blank'><FaInstagram  className='w-7 h-7  p-0.5 cursor-pointer text-[#808080] hover:text-white  duration-200'></FaInstagram> </Link>

        <Link to={'https://twitter.com/vivian_studios'} target='_blank'> <FaTwitter  className='w-7 h-7 text-[#808080] hover:text-white   p-0.5 cursor-pointer rounded-full  duration-200'></FaTwitter> </Link>

            <Link to={'https://www.linkedin.com/company/officialvivianstudios'} target='_blank'> <FaLinkedin  className='w-7 h-7 text-[#808080] hover:text-white   p-0.5 cursor-pointer rounded-full  duration-200'/> </Link>
           
            <Link to={'https://vimeo.com/user205910158'} target='_blank'> <FaVimeo href='https://vimeo.com/user205910158
twitter' className='w-7 h-7 text-[#808080] hover:text-white   p-0.5 cursor-pointer rounded-full  duration-200'/> </Link>
            </div>
            <p className='text-[#cecbcb]  text-[15px] pt-4 text-center flex items-center gap-x-2'><FaCopyright/> All right reserved by Vivian Studios</p>
          </div>
        </div>
    );
};

export default Footer;