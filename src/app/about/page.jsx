import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import BG from '/public/pho.avif'
import Photo1 from '/public/education.avif'
import { FiExternalLink } from "react-icons/fi";
function About() {
  return (
    <section className='mt-20 lg:mt-0 '>
      <div className='dark:bg-fdark1 lg:h-96 h-52 flex items-center '>
        <h1 className='text-6xl lg:pl-36 lg:w-1/2  animate-slideUp m-auto lg:m-0'>ABOUT ME</h1>
      </div>
      <p className='bg-orange-400 h-0.5 w-full'></p>

      {/* section 1  */}
      <div className='lg:relative '>
        <Image src={BG} className=' -z-10 absolute bg-cover' />
        <div className='lg:m-auto lg:w-[70%] relative w-full lg:top-44 dark:bg-fdark bg-white border-gray-600 border-b lg:h-h flex flex-col items-center space-y-10 justify-center p-5 lg:px-24'>
          <h1 className='text-green-400 text-xl text-green mt-5 animate-slideUp'>ABOUT MYSELF</h1>
          <center><p className='lg:text-2xl animate-slideUp'>
            Experienced full-stack web developer proficient in React.js, JavaScript, HTML, CSS, Git, GitHub, Next.js, Tailwind CSS,
            MongoDB, and Postman. Skilled in building responsive web applications, managing databases, and API testing and development.
            Committed to delivering high-quality solutions and staying updated with the latest trends in web development.
          </p></center>
          <button className='bg-green  py-3 animate-bounce  px-6 text-xl text-black dark:hover:bg-fdark hover:border-white hover:border dark:hover:text-green ease-out duration-300'>
            DOWNLOAD RESUME
          </button>
          {/* <p className='bg-orange-400 h-0.5 w-full'></p> */}
        </div>
      </div>
      {/* section 3 */}
      <main className=' lg:mt-80 '>
      <div className='dark:bg-fdark1 h-60 w-[100%] lg:px-36 px-14 flex items-center'>
      <h1 className='text-6xl '>Education</h1>
      </div>
      <p className='bg-orange-400 h-0.5 w-full'></p>
        <div className='lg:mx-36 m-5'>
          <div className='lg:ml-56'>
            {/* btech details  */}
            <div className='border-y dark:border-slate-700 border-gray-200 py-5 lg:my-5'>
              <div  className='flex justify-between dark:text-slate-200 lg:text-3xl ' >
                <h1 className=''>GH Raisoni College Of Engineering And Management</h1>
                <h1 className='flex'>Pune, Maharashtra &nbsp;<Link href='https://ghrcem.raisoni.net/' target='_blank'><FiExternalLink /></Link></h1>
              </div>
              <div className='flex justify-between lg:pt-3  lg:text-xl'>
                 <h1 className=''> B.Tech In Electronics And Telecommunication</h1>
                 <h1>2021 - 2024 </h1>
              </div>
              <h1 className='dark:text-slate-300'><i>CGPA 8.13</i></h1>
            </div>
            {/* Diploma Details  */}
            <div className='border-b dark:border-slate-700 border-gray-200 lg:pb-5 py-5 lg:py-0'>
              <div  className='flex justify-between dark:text-slate-200 lg:text-3xl' >
                <h1 className=''>Government Polytechnic</h1>
                <h1 className='flex  md:overflow-hidden overflow-scroll'> Aurangabad,MH &nbsp;<Link href='https://gpabad.ac.in/' target='_blank'><FiExternalLink /></Link></h1>
              </div>
              <div className='flex justify-between lg:pt-3 lg:text-xl'>
                 <h1 className=''> Diploma In Electronics And Telecommunication</h1>
                 <h1>2018 - 2021 </h1>
              </div>
              <h1 className='dark:text-slate-300'><i>Marks 84.95%</i></h1>
            </div>
            {/* ssc details  */}
            <div className='border-b dark:border-slate-700 border-gray-200 py-5'>
              <div  className='flex justify-between dark:text-slate-200 lg:text-3xl' >
                <h1 className=''>Janta Vidya Mandir</h1>
                <h1 className='flex'>Murud,Latur MH</h1>
              </div>
              <div className='flex justify-between lg:pt-3 lg:text-xl'>
                 <h1 className=''> SSC</h1>
                 <h1>2018 - 2021 </h1>
              </div>
              <h1 className='dark:text-slate-300'><i>Marks 89.40%</i></h1>
            </div>
          </div>
        </div>

        {/* Experiance  */}
        <div className='dark:bg-fdark1 h-56 w-[100%] lg:px-36 flex items-center'>
          <h1 className='text-6xl lg:ml-0 ml-12 animate-slideLeft'>Experiance</h1>
        </div>
      <p className='bg-orange-400 h-0.5 w-full'></p>
        <div className='lg:mx-36 m-5'>
          <div className='lg:ml-56'>
            {/* skill academy course internship  */}
            <div className='border-y dark:border-slate-700 border-gray-200 py-5 lg:my-5'>
              <div  className='flex justify-between dark:text-slate-200 lg:text-3xl' >
                <h1 className=''>Skillacademy by Testbook</h1>
                <h1 className='flex'>remote online&nbsp;<Link href='' target='_blank'><FiExternalLink /></Link></h1>
              </div>
              <div className='flex justify-between lg:pt-3 lg:text-xl'>
                 <h1 className=''>6 Months Internship <br />In Full Stack Web Developement</h1>
                 <h1>Feb - July 2022 </h1>
              </div>
            </div>
            {/* Britwise Internship  */}
            <div className='border-b dark:border-slate-700 border-gray-200  lg:pt-0 pt-5 pb-5'>
              <div  className='flex justify-between dark:text-slate-200 lg:text-3xl' >
                <h1 className=''>Britwise Technology Pvt Ltd</h1>
                <h1 className='flex'>Pune,Maharashtra &nbsp;<Link href='' target='_blank'><FiExternalLink /></Link></h1>
              </div>
              <div className='flex justify-between lg:pt-3 lg:text-xl'>
                 <h1 className=''>Intern Full stack Web Developer (Nextjs)</h1>
                 <h1>Jan - July 2024</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </section>
  )
}

export default About