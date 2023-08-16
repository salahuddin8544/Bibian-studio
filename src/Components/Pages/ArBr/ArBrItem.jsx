import React from 'react';

const ArBrItem = ({ content }) => {
    const { video, title, description } = content;
    return (
        <div className='grid grid-cols-12'>
          <video width="400" controls>
  <source src="mov_bbb.mp4" type="https://youtu.be/dAIATR9uaXI"/>
  <source src="mov_bbb.ogg" type="video/ogg"/>
  Your browser does not support HTML video.
</video>

            
            {/* <div className='col-span-8'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div> */}
        </div>
    );
};

export default ArBrItem;