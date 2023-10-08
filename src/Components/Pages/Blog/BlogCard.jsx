import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  const { date, title, image, blog, } = data;
  return (
    <Link to={`/blog/details/${data?.id}`} query={{'blog-id':data?.id}} >
       <div className=" w-11/12 boxshadow mx-auto bg-neutral text-neutral-content border  border-[#302f2f] hover:border-[grey] cursor-pointer p-4 ">
  <div className=" items-center ">
    <h2 className="lg:text-3xl text-2xl font-semibold  text-[#b4b4b4] hover:text-[white]"> {title} </h2>
    <img src={image} className="w-11/12 h-60" />
  </div>
</div>
    </Link>
  )
 
};

export default BlogCard;
