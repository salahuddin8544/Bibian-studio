import React from 'react';
import image from '../../../../assets/logp-gif/gif-image.gif'
import vibian from '../../../../assets/logo/vibian-write-2.png'
import './Home.css'
const Home = () => {
      return (
        <section className='w-full mx-auto pb-8 lg:mb-0 md:mb-0 sm:mb-10 mb-20 '>
            <div className='w-full mx-auto lg:mt-0 md:mt-10 sm:mt-[120px]  mt-[130px]'>
            
            <img className=' lg:w-2/4 lg:h-2/4 md:w-3/5 md:h-3/5 sm:w-[100%] sm:h-[100%] w-[100%] h-[100%] mx-auto mt-10' src={image} alt="" />
             <div className='mt-5'>
              <img src={vibian} className='lg:w-[44%] lg:h-[38vh]  md:w-[50%] md:h-[24vh] sm:w-[70%] w-[70%] mx-auto  '/>
             </div>
            

        </div>
        </section>
    );
};

export default Home;