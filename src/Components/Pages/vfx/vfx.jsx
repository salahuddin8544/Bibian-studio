import React from 'react';
import { Link } from 'react-router-dom';
import certificate from '../../../assets/certificate/certificate.png'
const VFX = () => {
    return (
        <div className=''>
            <section className='w-11/12 mx-auto'>
                <iframe className='w-full' height="600" src="https://www.youtube.com/embed/fjzZFceZDTA?start=18" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='mt-6'>Visual Effects (VFX) involve crafting, altering, and enhancing visuals for movies, TV, games, and media. These effects are often shaped using computer-generated imagery (CGI) and can be combined with real-world effects. Vivian Studios has been working in the industry to help a lot of creative minds since 2020.</p>
            </section>
            <section className='w-11/12 mx-auto py-16 '>
                <h3 className='text-xl md:text-3xl  my-4'>Our Visual Effects encompass diverse techniques :</h3>

                <p className='my-4 '><b className=''>CGI and 3D Modeling : </b> Crafting lifelike or imaginative objects scenes, characters, or environments.</p>

                <p className='my-4'><b>Compositing :</b> Blending live-action, CGI, and enhanced footage into unified visuals.</p>

                <p className='my-4'><b>Matte Painting :</b> Creating realistic or fantastical backdrops through painting or digital means.</p>

                <p className='my-4'><b>Motion Capture : </b> Transferring actors' motions to digital characters for authentic movement.</p>
                
                <p className='my-4'><b>Simulation : </b> Simulating natural and supernatural occurrences like fire, water, and more.</p>

                <p className='my-4'><b>Rotoscoping : </b> Separating elements in footage for precise adjustments.</p>

                <p className='my-4'><b>Green Screen/Chroma Key :</b>  Recording against green/blue backgrounds for versatile backdrop swapping.</p>

                <p className='my-4'><b>Particle Effects :</b> Crafting minor visual elements like sparks or dust to amplify scenes.</p>

                <p className='my-4'><b>Digital Enhancement :</b> Improving footage via color grading and post-processing.</p>

                <p>VFX Production is pivotal, enabling creators to realize creative visions, depict risky scenes, and merge practical and CGI methods for striking results. The blend of both techniques evolves
                    continuously, shaping captivating visual narratives.
                </p>
               <div className='text-center mt-6 mx-auto'>
                    <img className='w-32 mx-auto' src={certificate} alt="" />
               </div>
            </section>
        </div>
    );
};

export default VFX;