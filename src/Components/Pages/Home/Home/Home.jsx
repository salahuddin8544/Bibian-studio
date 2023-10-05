import React from 'react';
import image from '../../../../assets/logp-gif/gif-image.gif'
import vibian from '../../../../assets/logo/vibian-write-2.png'
import './Home.css'
const Home = () => {
      return (
        <section className='w-full mx-auto pb-8 lg:mb-0 md:mb-0 sm:mb-10 mb-20 '>
            <div className='w-full mx-auto '>
            
            <img className=' w-2/4 h-2/4 mx-auto mt-10' src={image} alt="" />
             <div className='mt-5'>
              <img src={vibian} className='lg:w-[44%]  w-[50%] mx-auto lg:h-[38vh] md:h-[24vh]'/>
             </div>
            

        </div>
        </section>
    );
};

export default Home;