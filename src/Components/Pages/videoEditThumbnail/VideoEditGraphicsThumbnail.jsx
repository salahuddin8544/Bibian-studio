import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "/public/service.json";
import { FaDesktop,  FaRegImage, FaVideo } from "react-icons/fa";
import VideoEdit from "./videoEdit";
import ShortVideos from "./shortVideos";
import thumbnailOne from '../../../assets/thumbnail/online class (1).jpg';
import thumbnailTwo from '../../../assets/thumbnail/thumbnail.jpg';


const VideoEditGrahphicsThumbnail = () => {
 
  const LongVideoEditUrl = [
    {
      id: 1,
      url:"https://www.youtube.com/embed/kkLY5ANpnWQ?si=w1S9gITke19B4rC-",
    },
    {
      id: 2,
      url:"https://www.youtube.com/embed/ljE7XcL3dgQ?si=IQv4Tdbg-Xvk0Sg9",
    },
    
  ];

  const shortVideoEditUrl = [
    {
      id: 3,
      url:"https://youtube.com/embed/jVDFFvmz6eQ?si=Y8hc2nNV-OHM6IYP",
    },
    {
      id: 4,
      url:"https://www.youtube.com/embed/Rtj0--RUiko",
    },
   
    
  ];

  const motionGraphicsUrl  = [
    {
      id: 5 ,
      url:'https://www.youtube.com/embed/WcCwkNOQLfs?si=SbEZObvM86PJlLze'
    },
    {
      id: 6,
      url:'https://www.youtube.com/embed/pRdC8X2TtzY?si=72Ds_IifZ5gVmVwV'
    },
    {
      id: 7 , 
      url: 'https://www.youtube.com/embed/IZ70t6lqpSY'
    }
  ]


  return (
    <div>
      {/* Banner  Section  */}
      <section className="w-full mx-auto h-auto lg:flex md:flex  border-b border-[#413839]">
        {/* left side   */}
        <div className="lg:w-3/5 w-full flex items-start ">
          <div className=" w-full px-4 lg:mt-16  ">
            <h1 className="text-4xl font-bold ">
              {" "}
               “ Enhance Your Digital Footprint on YouTube and TikTok for Greater Online Visibility! “ 
            </h1>
            <h5 className="text-xl font-semibold mt-5">
              {" "}
              We drive business growth through brand promotion, crafting captivating content, and connecting with  your desired audience on various online platforms like YouTube, TikTok, Instagram, Facebook, and more.  Strengthening your digital presence for maximum empowerment. 
            </h5>
          </div>
        </div>

        {/* right  side  */}
        <div className="lg:w-3/5 w-full">
          <Lottie animationData={animation} looh5={true} />
        </div>
      </section>

      {/* Content Section  */}
      <section className="">
        {/* Our service  */}
        <div>
          <h2 className="text-3xl font-semibold text-center mt-8 ">
            {" "}
            Our Service{" "}
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-x-8  lg:w-8/12 md:w-10/12 w-full mx-auto gap-y-5">
            <div className=" px-4 py-5   border border-[#161a1b] ">
              <FaVideo className="text-3xl  text-white  mx-auto" />
              <h5 className="font-semibold text-xl mt-4 text-white text-center">
                {" "}
                Video Editing{" "}
              </h5>
              <p className="mt-4">
              Is your YouTube Channel struggling to find an audience? No need to fret! Let us assist  you in crafting captivating long-form and short-form videos that will boost your views and drive sales. 
              </p>
            </div>
            <div className="px-4 py-5   border border-[#161a1b]">
              <FaDesktop className="text-3xl text-white mx-auto "  />
              <h5 className="font-semibold text-xl mt-4 text-white  text-center">
               Motion Graphics  
              </h5>
              <p className="mt-4">
              Motion graphics hold the key to enhancing viewer engagement and a very good  method of explaining your brand. Our skilled animators specialize in creating captivating motion  graphics that captivate audiences and elevate your content's impact.
              </p>
            </div>
            <div className=" px-4 py-5   border border-[#161a1b] ">
              <FaRegImage className="text-3xl text-white mx-auto " />
              <h5 className="font-semibold text-xl mt-4 text-white text-center">
               Thumbnail 
              </h5>
              <p className="mt-4">
              Utilize eye-catching thumbnails as a powerful strategy to boost your click-through rate  (CTR). Our expert designers will assist you in crafting compelling thumbnails that drive higher views to  your content. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Editing section  */}
      <section className="mt-20">
        <h5 className="text-3xl font-semibold text-white text-center">
          {" "}
          Long Form Video Editing{" "}
        </h5>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-y-0 gap-y-10 lg:mt-16 mt-10">
           {LongVideoEditUrl?.map((url) => <VideoEdit key={url?.id} link={url?.url} />)}

        </div>
      </section>

      {/* short video section  */}
      <section className="mt-28">
        <h5 className="text-3xl font-semibold text-white text-center">
          {" "}
          Short Form Video Editing{" "}
        </h5>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-y-0 gap-y-10 lg:mt-16 mt-10">
            {shortVideoEditUrl?.map((url) => <ShortVideos key={url?.id} link={url?.url } /> )}
          
        </div>
      </section>

      <section className="mt-24">
        <h5 className="text-3xl font-semibold text-white text-center">
          {" "}
          Motion Graphics {" "}
        </h5>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-y-0 gap-y-10 lg:mt-8 mt-6 gap-x-3">
            {motionGraphicsUrl?.map((url) => <ShortVideos key={url?.id} link={url?.url } /> )}
          
        </div>
      </section>

      {/* Thumbnail Section  */}
      <section className="mt-24">
        <h5 className="text-3xl font-semibold text-white text-center">
          {" "}
          Thumbnail  {" "}
        </h5>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mb-10 lg:gap-y-0 gap-y-10 lg:mt-10 mt-8">
            <div>
             <img src={thumbnailOne} className="lg:w-11/12 md:w-10/12 w-10/12 lg:h-[430px] md:h-[360px] sm:h-[360px] mx-auto rounded-md" />

            </div>
            <div>
              <img src={thumbnailTwo} className="lg:w-11/12 md:w-10/12 w-10/12 lg:h-[430px] md:h-[360px] sm:h-[360px] h-[280px] mx-auto rounded-md" />
            </div>
          
        </div>
      </section>

    </div>
  );
};

export default VideoEditGrahphicsThumbnail;
