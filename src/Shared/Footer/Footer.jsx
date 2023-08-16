import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='py-2 mx-auto w-full bg-gray'>
            <div className='grid grid-cols-3 gap-4  mx-auto w-32'>
            <FaFacebook className='w-9 h-9 duration-200 p-0.5 text-facebook bg-white rounded-full border-none hover:text-gray cursor-pointer'></FaFacebook>
            <FaInstagram className='w-9 h-9 text-instagram p-0.5 cursor-pointer bg-white rounded-full hover:text-gray duration-200'></FaInstagram>
            <FaTwitter className='w-9 h-9 text-twitter p-0.5 cursor-pointer bg-white rounded-full hover:text-gray duration-200'></FaTwitter>
            </div>
            <h2 className='text-white pt-2 text-center'>All right reserved Vivian Studio 2023</h2>
        </div>
    );
};

export default Footer;