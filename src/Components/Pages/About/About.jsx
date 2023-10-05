import React from 'react';
import logo from '../../../assets/logo/logo-bibian.png'
const About = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto my-9'>
                <div className='flex justify-center w-full  mb-8'>
                    <img src={logo} className='w-320 h-32 ' />
                </div>
                <h3 className='text-3xl text-center'>Welcome to Vivian Studios!</h3>
                <p className='py-4'>Founded amidst the challenging times of the COVID-19 pandemic on May 30th, 2020, Vivian
                    Studios embarked on a remarkable journey. In a world grappling for survival, we set out with a
                    unique vision – to illuminate the splendor of life through captivating visual narratives.
                    Specializing in 3D animation and CGI, we began our odyssey by sharing these visual stories on
                    our Instagram page.</p>
                <p className='py-4'>What started as a humble endeavor in a small room in Dhaka, fueled by nothing but passion,
                    dedication, and an insatiable thirst for learning, has now blossomed into a thriving creative hub.
                    Our initial steps were guided by online tutorials, our determination to master the art of animation
                    unwavering. Today, we stand proud as a dynamic team, a collective of skilled individuals, all
                    with diverse talents and a shared love for crafting mesmerizing visual experiences.</p>
                <p className='py-4'>Our motto, "Big dreams," encapsulates our core philosophy. We firmly believe in the
                    transformative power of storytelling, the ability to reshape perspectives and inspire grand
                    aspirations. As we weave intricate narratives through pixels and polygons, we aim to ignite
                    imagination, spark conversations, and foster a sense of boundless possibility.
                </p>
                <p className='py-4'>Join us on this extraordinary journey as we continue to paint stories with light and imagination.
                    Vivian Studios is not just a company; it's a testament to the human spirit's capacity to innovate,
                    create, and dream big.</p>
            </div>
        </div>
    );
};

export default About;