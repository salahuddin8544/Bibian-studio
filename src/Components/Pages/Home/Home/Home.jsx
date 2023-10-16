import React from 'react';
import video from '../../../../assets/video/background-video.mp4'
import image from '../../../../assets/logp-gif/gif-image.gif'
import './Home.css'
const Home = () => {
    if(!video)
{
    return 'Loading content'
}  
  return (
        <div className='w-full  mx-auto mb-14  '>
            <video src={video} autoPlay loop className='video-background' muted playsInline>


            </video>
            <img className='w-3/5 mx-auto mt-24 ' src={image} alt="" />
        </div>
    );
};

export default Home;