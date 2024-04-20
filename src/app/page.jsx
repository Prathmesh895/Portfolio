"use client"
import React from 'react'
import Image from 'next/image'
import Photo1 from '/public/education.avif'
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import Skills from '@/components/skills'


function homepage() {
  const handleDownload = () => {
    window.open('/Prathmesh-Gatade.pdf', '_blank');
  };
  return (
    <>
      <section className='lg:flex lg:mx-36 mx-6 lg:items-center mt-40'>
        <div className='lg:w-1/2 space-y-14 mt-40 lg:mt-0  flex flex-col items-center  lg:items-start   '>
          <h1 className='text-orange-600 text-2xl animate-slideRight'>HELLO I'M</h1>
          <p className='lg:text-8xl text-5xl flex flex-col items-center lg:items-start lg:space-y-3 '>
            <span className='animate-slideLeft'>PRATHMESH</span>
            <span className='animate-slideRight'>GATADE</span>
          </p>
          <div className='text-orange-600 text-sm'>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              'A PASSIONATE FULL-STACK WEB DEVELOPER',
              1000,
              'A PASSIONATE NEXTJS DEVELOPER',
              1000,
              'A PASSIONATE REACTJS DEVELOPER',
              1000,
              'A PASSIONATE FRONT-END WEB DEVELOPER',
              1000,
            ]}
            speed={50}
            style={{ fontSize: '2em' }}
            repeat={Infinity}
          />
          </div>
          <button className=' text-lg text-white p-2 bg-orange-600'>SAY HELLO</button>
        </div>
        {/* PHOTO SECTION */}
        {/* <div className='lg:w-1/2 rounded-full'>
        <Image className='rounded-full' src={PROF}/>
      </div> */}
      </section>
      <section className='lg:flex lg:mb-20 lg:mx-36 mt-40'>
        <div className='lg:w-1/3'><Image className='' src={Photo1} alt='banner' /></div>
        <div className='flex flex-col items-center  space-y-5 lg:ml-20 m-5 lg:m-0 lg:w-2/3'>
          <h1 className='text-xl text-green'>MY BIOGRAPHY</h1>
          <center><h1 className='lg:text-5xl text-2xl'>A Full stack Web developer Based in Pune, Maharashtra</h1>
            <p className='text-lg dark:text-gray-400 mt-5'>Experienced full-stack web developer proficient in React.js, JavaScript, HTML, CSS, Git,
              GitHub, Next.js, Tailwind CSS, MongoDB, and Postman. Skilled in building responsive web
              applications, managing databases, and API testing and development. Committed to delivering
              high-quality solutions
              and staying updated with the latest trends in web development.
            </p>
          </center>
          <div className='lg:grid grid-cols-2 gap-6 lg:text-xl font-semibold'>
            <div>Name : Prathmesh Gatade</div>
            <div>From : Pune, Maharashtra</div>
            <div>Email : prathmeshgatade895@gmail.com</div>
            <div>Contact : 8956146149</div>
          </div>

          <div>

            <div className='flex space-x-4 items-center mt-2'>
              <h1 className='text-xl'>Follow me on</h1>
              <Link href='https://www.linkedin.com/in/prathmesh-guruling-gatade/' target='_blank' className='dark:bg-gray-800 p-2 rounded-full'>  <AiOutlineLinkedin size={22} /> </Link>
              <Link href='https://github.com/Prathmesh895' target='_blank' className='dark:bg-gray-800 p-2 rounded-full'><BsGithub size={19} /></Link>
              <Link href='https://www.instagram.com/mi_prathmeshgatade/' target='_blank' className='dark:bg-gray-800 p-2 rounded-full'> <BsInstagram size={18} /></Link>
              <Link href='https://www.instagram.com/mi_prathmeshgatade/' target='_blank' className='dark:bg-gray-800 p-2 rounded-full'> <FaTwitter size={22} /></Link>
            </div>
            <button onClick={handleDownload} className='bg-green  py-3 animate-bounce mt-10  px-6 text-xl text-black dark:hover:bg-fdark hover:border-white hover:border dark:hover:text-green ease-out duration-300'>
              DOWNLOAD RESUME
            </button>
          </div>
        </div>
      </section>
      <Skills/>
    </>

  )
}

export default homepage