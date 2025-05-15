"use client"
import AOSWrapper from '@/components/aoswrapper';
import React, { useEffect, useState } from 'react'
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import Skills from '@/components/skills'

function page() {
  const handleDownload = () => {
    window.open('/Prathmesh_Gatade_MERN_Resume.pdf', '_blank');
  };
  const [hello, setHello] = useState('')
  const handleOnHello = () => {
    setHello(true);
  };

  useEffect(() => {
    if (hello) {
      const timer = setTimeout(() => {
        setHello(false);
      }, 3000); // 3000 ms = 3 seconds
      return () => clearTimeout(timer); // Cleanup timer if component unmounts or hello state changes
    }
  }, [hello]);
  return (
    <>
      <AOSWrapper>
        <section className=' lg:m-44  mt-20' data-aos="fade-up">
          <div className="grid grid-cols-12">
            <div className="col-span-1 col-10 border-dashed border-b dark:border-gray-800 border-gray-200"></div>
            <div className="col-span-10 col-80 border-dashed border-b border-l dark:border-gray-800 border-gray-200">
              <h1 className='text-orange-600 text-2xl p-4' data-aos="fade-up">HELLO I'M</h1>
            </div>
            <div className="col-span-1 col-10 border-dashed border-b border-l dark:border-gray-800 border-gray-200"></div>
            {/* 1 */}
            <div className="col-span-1 col-10 border-dashed border-b dark:border-gray-800 border-gray-200"></div>
            <div className="col-span-10 col-80 border-dashed border-b border-l dark:border-gray-800 border-gray-200">
              <h1 className='lg:text-8xl text-5xl text-center lg:text-start p-4' data-aos="fade-up">Prathmesh Gatade</h1>
            </div>
            <div className="col-span-1 col-10 border-dashed border-b border-l dark:border-gray-800 border-gray-200"></div>
            {/* 2 */}
            <div className="col-span-1 col-10 border-dashed border-b dark:border-gray-800 border-gray-200"></div>
            <div className="lg:text-start text-center col-span-10 col-80 p-4 border-dashed border-b border-l lg:h-14 h-24 dark:border-gray-800 border-gray-200 text-orange-600 text-sm" data-aos="fade-up">
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
            <div className="col-span-1 col-10 border-dashed border-b border-l dark:border-gray-800 border-gray-200"></div>
            {/* 3 */}
            <div className="col-span-1 col-10 border-dashed border-b dark:border-gray-800 border-gray-200"></div>
            <div data-aos="fade-up" className="col-span-10 col-80 border-dashed border-b  border-l dark:border-gray-800 border-gray-200 text-xl p-4 text-center lg:text-start">
              I'm a web developer with experiance for over 1 year. <br />
              experence is to create ans website design,Frontend design ,backend design and many more...
            </div>
            <div className="col-span-1 col-10 border-dashed border-b border-l dark:border-gray-800 border-gray-200"></div>
            {/* 4 */}
            <div className="col-span-1 col-10 border-dashed border-b dark:border-gray-800 border-gray-200"></div>
            <div className="col-span-10 col-80 border-dashed border-b  border-l dark:border-gray-800 border-gray-200 text-xl p-4">
              <div data-aos="fade-up" className='flex space-x-4 items-center lg:justify-normal justify-between mt-2'>
                <h1 className='text-xl lg:block hidden'>Follow me on</h1>
                <Link href='https://www.linkedin.com/in/prathmesh-guruling-gatade/' target='_blank' className='dark:bg-gray-800 p-2 rounded-full'>  <AiOutlineLinkedin size={22} /> </Link>
                <Link href='https://github.com/Prathmesh895' target='_blank' className='dark:bg-gray-800 p-2 rounded-full'><BsGithub size={19} /></Link>
                <Link href='https://www.instagram.com/mi_prathmeshgatade/' target='_blank' className='dark:bg-gray-800 p-2 rounded-full'> <BsInstagram size={18} /></Link>
                <Link href='https://www.instagram.com/mi_prathmeshgatade/' target='_blank' className='dark:bg-gray-800 p-2 rounded-full'> <FaTwitter size={22} /></Link>
              </div>
            </div>
            <div className="col-span-1 col-10 border-dashed border-b border-l dark:border-gray-800 border-gray-200"></div>
            {/* 4 */}
            <div className="col-span-1 col-10 border-dashed dark:border-gray-800 border-gray-200"></div>
            <div className="col-span-10 col-80 border-dashed  border-l dark:border-gray-800 border-gray-200 h-14 p-4" data-aos="fade-up">
              <button onClick={handleOnHello} className=' text-lg text-white p-2 bg-orange-600' >SAY HELLO</button>

              {
                hello &&
                <>
                  <div className='w-80 h-60 text-3xl lg:left-[40%] backdrop-blur-xl absolute top-1/3 flex items-center justify-center text-green'>
                    👋  Hello !
                  </div>
                </>
              }
            </div>
            <div className="col-span-1 col-10 border-dashed border-l dark:border-gray-800 border-gray-200"></div>
          </div>
        </section>

        {/* section 2  */}
        <div className='flex flex-col items-center  space-y-5 m-5 lg:mx-44 ' data-aos="fade-up">
          <h1 className='text-xl text-green'>MY BIOGRAPHY</h1>
          <center><h1 className='lg:text-5xl text-2xl'>A Full stack Web developer Based in Pune, Maharashtra</h1>
            <p className='text-lg dark:text-gray-400 mt-5'>
              Full Stack Web Developer with a proven ability to develop engaging and responsive user interfaces using ReactJS and NextJS.
              With one year of experience in the MERN stack, proficient in creating fluid experiences and maintaining best practices in
              HTML, CSS, and Tailwind CSS. Skilled in Git, GitHub, MongoDB, and integrating front-end solutions with back-end
              support using NodeJS and ExpressJS. Aiming to leverage this expertise to deliver high-quality products and build features that
              enhance user experience for millions.

            </p>
          </center>
          <div className='lg:grid grid-cols-2 gap-6 lg:text-xl font-semibold' data-aos="fade-up">
            <div>Name : Prathmesh Gatade</div>
            <div>From : Pune, Maharashtra</div>
            <div>Email : prathmeshgatade895@gmail.com</div>
            <div>Contact : 8956146149</div>
          </div>

          <div className='flex justify-center flex-col' data-aos="fade-up">
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
        <Skills />
      </AOSWrapper>
    </>
  )
}

export default page
