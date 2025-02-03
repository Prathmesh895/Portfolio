import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function page() {
  return (
    <>
      <div className='dark:bg-gray-900 bg-Footcol text-white h-96 flex flex-col items-center space-y-5 pt-20'>
        {/* <Image src={PGLOgo} width={150} height={150} /> */}
        <h1 className='text-4xl'>Prathmesh Gatade</h1>
        <div className='text-lg flex text-gray-400 space-x-7'>
          <h1 className='flex items-center'><BsFillTelephoneFill className='mx-2' size={15}/>+91 8956146149</h1>
          <h1 className='flex items-center'><MdEmail className='mx-2'/>prathmeshgatade895@gmail.com</h1>
          <h1 className='flex items-center'><FaLocationDot className='mx-2'/>Pune,Maharashtra</h1>
        </div>
      </div>
      <div className='bg-fdark1 h-24'>

      </div>
    </>
  )
}

export default page