import React from 'react';

const Loading = () => {
    return (
        <div>
           <div className='flex justify-center my-20'>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
        </div> 
        </div>
    );
};

export default Loading;