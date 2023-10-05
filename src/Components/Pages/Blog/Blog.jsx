import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';


const Blog = () => {
    const [blogs,setBlogs] = useState([])
    const [error,  setError ] = useState(null)
    useEffect(()=> {
     const fetchData = async() => {
        try{
         const response = await fetch(`https://crm-server-yr5g.onrender.com/api/blogs`)
         if(!response.ok){
            throw new Error ('Network response  was not ok')
         }
         const jsonData = await response.json()
         setBlogs(jsonData)
        }catch (error) {
        setError(error)
        }
     }
     fetchData()
    },[])

    return (
        <div className='mb-40'>
            <h1 className='text-center mt-4'> Important Article  </h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:w-10/12 md:10/12 w-11/12 mx-auto mt-24 lg:gap-y-16 gap-y-10'>
                {blogs?.map((data) => <BlogCard key={data?._id} data={data}  />)}
            </div>
        </div>
    );
};

export default Blog;