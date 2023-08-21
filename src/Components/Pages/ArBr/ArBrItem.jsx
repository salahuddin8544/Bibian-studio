import React from 'react';

const ArBrItem = ({ content }) => {
    const { video, title, description } = content;
    return (
        <div className='grid grid-cols-12 items-center my-8'>
            <div className='col-span-12 md:col-span-4 mx-auto'>
                <span>{video}</span>
            </div>
            <div className='col-span-12 md:col-span-8'>
                <h3 className='text-3xl md:text-4xl mb-4'>{title}</h3>
                <p className='text-lg'>{description}</p>
            </div>
        </div>
    );
};

export default ArBrItem;