import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data);
    }
    return (
        <div className='grid grid-cols-12 text-white'>
           
            <div className='col-span-12 md:col-span-8 bg-grey ps-6 md:ps-8 py-16 md:py-24'>
                <h3 className='text-4xl font-bold'>GET IN TOUCH</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-10 grid grid-cols-12">
                        <label className="block md:inline col-span-12 md:col-span-4">
                            <span className="font-semibold">Name</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="Name" className="input input-bordered col-span-12 md:col-span-8 w-96 md:w-72 lg:w-96 bg-grey2 rounded py-1 px-1 border" />
                    </div>
                    <div className="mt-10 grid grid-cols-12">
                        <label className="block md:inline col-span-12 md:col-span-4">
                            <span className="font-semibold">Email</span>
                        </label>
                        <input {...register("email")} type="text" placeholder="Email" className="input input-bordered col-span-12 md:col-span-8 w-96 md:w-72 lg:w-96 bg-grey2 rounded py-1 px-1 border" />
                    </div>
                    <div className="mt-10 grid grid-cols-12">
                        <label className="block md:inline col-span-12 md:col-span-4">
                            <span className="font-semibold">Phone</span>
                        </label>
                        <input {...register("phone")} type="text" placeholder="Phone" className="input input-bordered col-span-12 md:col-span-8 w-96 md:w-72 lg:w-96 bg-grey2 rounded py-1 px-1 border" />
                    </div>
                    <div className="mt-10 grid grid-cols-12">
                        <label className="block md:inline col-span-12 md:col-span-4">
                            <span className="font-semibold">Message</span>
                        </label>
                        <textarea type="text"{...register("message")}  placeholder="Message" className="input input-bordered col-span-12 md:col-span-8 w-96 md:w-72 lg:w-96 bg-grey2 rounded py-1 px-1 border" name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className="mt-10 grid grid-cols-12">
                        <label className="block md:inline col-span-12 md:col-span-4">
                        
                        </label>
                        <input type="submit" className='w-96 bg-grey2 rounded py-1 md:w-72 lg:w-96 ' value="Submit" />
                    </div>
                   
                </form>
            </div>
            <div className='col-span-12 md:col-span-4 bg-grey2 ps-6 pe-10 py-16 md:py-24'>
                <div className='mt-8'>
                    <h3 className='text-sm font-se text-grey3 '>JOB ENQUIRIES</h3>
                    <p className='font-semibold'>info@brickh.com</p>
                </div>
                <div className='mt-8'>
                    <h3 className='text-sm font-se text-grey3 '>CALL US</h3>
                    <p className='font-semibold'>0330 058 5333</p>
                </div>
                <div className='mt-8'>
                    <h3 className='text-sm font-se text-grey3 '>HQ</h3>
                    <p className='font-semibold'>Unit 4, Third Floor, 12 Hilton Street, Northern Quarter, Manchester, M1 1JF</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;