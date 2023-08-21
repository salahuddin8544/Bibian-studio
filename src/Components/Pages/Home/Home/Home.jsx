import React from 'react';
import video from '../../../../assets/video/background-video.mp4'
import image from '../../../../assets/logp-gif/gif-image.gif'
import './Home.css'
const Home = () => {
      return (
        <div className='w-full mx-auto'>
            <video height={600} src={video} autoPlay loop className='video-background' muted playsInline>


            </video>
            <img className=' w-2/4 h-2/4 mx-auto mt-5' src={image} alt="" />
            <h3 className='text-center text-3xl mb-4 vivian-font'>Vivian Studios</h3>
        </div>
    );
};

export default Home;