import React from 'react'
import Link from 'next/link';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

function page() {
    return (
        <>
            <div className='dark:bg-black bg-fdark1 text-white h-72 border-t border-gray-900 flex flex-col items-center space-y-5 pt-20'>
                {/* <Image src={PGLOgo} width={150} height={150} /> */}
                <h1 className='lg:text-4xl text-3xl'>Prathmesh Gatade</h1>
                <div className='text-lg flex flex-col lg:flex-row text-gray-400 lg:space-x-7 items-center'>
                    <h1 className='flex items-center'><BsFillTelephoneFill className='mx-2' size={15} />+91 8956146149</h1>
                    <h1 className='flex items-center'><MdEmail className='mx-2' />prathmeshgatade895@gmail.com</h1>
                    <h1 className='flex items-center'><FaLocationDot className='mx-2' />Pune,Maharashtra</h1>
                </div>
            </div>
            <div className='bg-black lg:h-16 border-t border-gray-900 dark:text-gray-400 text-white lg:px-36 flex items-center flex-col lg:flex-row justify-between p-4'>
                <h1>&copy; 2025 Portfolio.All Rights Reserved | Design by
                    <span className='text-green'> Prathmesh Gatade</span>
                </h1>
                <div className='flex space-x-4 items-center mt-2'>
                    <Link href='https://www.linkedin.com/in/prathmesh-guruling-gatade/' target='_blank' className='bg-gray-800 p-2 rounded-full'>  <AiOutlineLinkedin size={22} /> </Link>
                    <Link href='https://github.com/Prathmesh895' target='_blank' className='bg-gray-800 p-2 rounded-full'><BsGithub size={19} /></Link>
                    <Link href='https://www.instagram.com/mi_prathmeshgatade/' target='_blank' className='bg-gray-800 p-2 rounded-full'> <BsInstagram size={18} /></Link>
                    <Link href='https://www.instagram.com/mi_prathmeshgatade/' target='_blank' className='bg-gray-800 p-2 rounded-full'> <FaTwitter size={22} /></Link>
                </div>
            </div>
        </>
    )
}

export default page
