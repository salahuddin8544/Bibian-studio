import React,{ useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
const Contact = () => {
    const { register, handleSubmit } = useForm();
    const form = useRef();
    const sendEmail = (data) =>{
        // console.log(data);
        emailjs.sendForm('service_3qx5r54', 'template_7x3atdr', form.current, 'kjYuHpzNNeYnRBCVb')
          .then((result) => {
              console.log(result.text);
              toast.success('Message sent!')
          }, (error) => {
              console.log(error.text);
              toast.error('Message not sent')
          });
        
    }

    const handleWhatsAppClick = () => {
        // const url = `https://wa.me/${phoneNumber}`;
        const url = `https://wa.me/qr/KH4PTDIGE4GAG1`;
        // window.open(url, '_blank')
        window.location.href = url ;
    }

    
    return (
        <div className='grid grid-cols-12 gap-y-5 bg-[#242323] text-white border-b border-grey2 '>
           
            <div className='col-span-12 md:col-span-8 bg-grey ps-6 md:ps-8 py- md:py-12'>
                <h3 className='text-4xl font-bold'>GET IN TOUCH</h3>
                <form ref={form}  onSubmit={handleSubmit(sendEmail)}>
                    <div className="mt-10 grid grid-cols-12">
                        <label className="block md:inline col-span-12 md:col-span-4">
                            <span className="font-semibold">Name</span>
                        </label>
                        <input name="user_name"  {...register("name")} type="text" placeholder="Name" className="input input-bordered col-span-12 md:col-span-8 w-72 md:w-72 lg:w-96 bg-grey2 rounded py-1 px-1 border" />
                    </div>
                    <div className="mt-10 grid grid-cols-12">
                        <label className="block md:inline col-span-12 md:col-span-4">
                            <span className="font-semibold">Email</span>
                        </label>
                        <input name="user_email" {...register("email")} type="text" placeholder="Email" className="input input-bordered col-span-12 md:col-span-8 w-72 md:w-72 lg:w-96 bg-grey2 rounded py-1 px-1 border" />
                    </div>
                    <div className="mt-10 grid grid-cols-12">
                        <label className="block md:inline col-span-12 md:col-span-4">
                            <span className="font-semibold">Phone</span>
                        </label>
                        <input  name="message" {...register("phone")} type="text" placeholder="Phone" className="input input-bordered col-span-12 md:col-span-8 w-72 md:w-72 lg:w-96 bg-grey2 rounded py-1 px-1 border" />
                    </div>
                    <div className="mt-10 grid grid-cols-12">
                        <label className="block md:inline col-span-12 md:col-span-4">
                            <span className="font-semibold">Message</span>
                        </label>
                        <textarea type="text"{...register("message")}  placeholder="Message" className="input input-bordered col-span-12 md:col-span-8 w-72 md:w-72 lg:w-96 bg-grey2 rounded py-1 px-1 border" name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className="mt-10 grid grid-cols-12 ">
                        <label className="block md:inline col-span-12 md:col-span-4">
                        
                        </label>
                        <input  type="submit" className=' bg-grey2 rounded py-1 w-72 md:w-72 lg:w-96 cursor-pointer' value="Submit" />
                    </div>
                   
                </form>
            </div>
            <div className='col-span-12 md:col-span-4 bg-grey2 ps-6 pe-10 py-16 md:py-24 '>
                <div className='mt-8'>
                    <h3 className='text-sm font-se text-grey3 '>ENQUIRIES</h3>
                    <p className='font-semibold flex items-center gap-x-3'> <FaEnvelope className='text-white'/>  contact@vivianstudios.com</p>
                </div>
                <div className='mt-8'>
                    <h3 className='text-sm font-se text-grey3 '>CALL US</h3>
                    <p className='font-semibold flex items-center gap-x-3 '> <FaPhoneAlt className='text-white'/> +8801303542117 </p>
                </div>
                 <div className='mt-8'>
                    <FaWhatsapp onClick={handleWhatsAppClick} className='text-4xl bg-[#2bbd2b] rounded-full cursor-pointer ' />
                 </div>
            </div>
        </div>
    );
};

export default Contact;