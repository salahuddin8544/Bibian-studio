import React from 'react';
import img1 from '../../../assets/images/animation/1.jpg'
import img2 from '../../../assets/images/animation/2.jpg'
import img3 from '../../../assets/images/animation/3.jpg'
import img4 from '../../../assets/images/animation/4.jpg'
import img9 from '../../../assets/images/animation/5.jpg'
import img6 from '../../../assets/images/animation/6.jpg'
import img7 from '../../../assets/images/animation/7.jpg'
import img8 from '../../../assets/images/animation/8.jpg'
import img5 from '../../../assets/images/animation/9.jpg'
const AnimationCgi = () => {
    return (
        <div>

            <section className='w-11/12 mx-auto'>
                <iframe className='w-full mt-9' height="600" src="https://www.youtube.com/embed/supJfbjeNw4?start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 <p className='mt-6'>Incorporating 2D and 3D animation has turned into a crucial component of contemporary corporate offerings, thanks to its adaptable and influential qualities. Whether applied in marketing, gaming, education, amusement, or showcasing products, animation & CGI provides an array of advantages that empower businesses to attain their goals with efficacy. Vivian Studios has been serving in the industry as a one-stop solution for our clients and mitigating critical situations in the workflow.</p>
            </section>
            <section className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 my-9 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <img className='m-2 w-full rounded' src={img1} alt="" />
                    <img className='m-2 w-full rounded' src={img2} alt="" />
                    <img className='m-2 w-full rounded' src={img3} alt="" />
                    <img className='m-2 w-full rounded' src={img4} alt="" />
                    <img className='m-2 w-full rounded' src={img5} alt="" />
                    <img className='m-2 w-full rounded' src={img6} alt="" />
                    <img className='m-2 w-full rounded' src={img7} alt="" />
                    <img className='m-2 w-full rounded' src={img8} alt="" />
                    <img className='m-2 w-full rounded' src={img9} alt="" />
                </div>
            </section>
        </div>
    );
};

export default AnimationCgi;