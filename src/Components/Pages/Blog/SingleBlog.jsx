import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Loading';

const SingleBlog = () => {
    const id = useParams()
    const [blog,setBlog] = useState('')
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

     useEffect(() => {
     async function fetchData () {
        try{
         const response = await axios.get(`https://crm-server-yr5g.onrender.com/api/blogs/${id?.id}`)
         setBlog(response.data)
         console.log(response.data)
         setLoading(false)
        } catch(error) {
          setError(error.message)
          console.error('Error fatching data')
          setLoading(false)
        }
     }
     fetchData()
     },[])
    
     if(loading){
        return <Loading> </Loading>
     }
    return (
        <div className='border border-[#302f2f] w-10/12 my-8 mx-auto p-4'>
          <h3 className='lg:text-4xl md:text-3xl font-semibold'> {blog?.title}  </h3> 
            <img src={blog?.image} className='w-[80%] lg:h-[70vh] md:h-[50vh] my-6 mx-4' />

            <p className=''> {blog?.blog} </p>
        </div>
    );
};

export default SingleBlog;