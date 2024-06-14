import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { RiComputerLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import AOSWrapper from '@/components/aoswrapper';


function page() {

    return (
        <>
           
            <AOSWrapper>

                <div className='dark:bg-fdark1 lg:h-96 h-52 flex items-center lg:mt-0 mt-20'>
                    <h1 className='text-6xl lg:pl-36 lg:w-1/2 m-auto lg:m-0' data-aos="fade-up">PORTFOLIO</h1>
                </div>
                <p className='bg-orange-400 h-0.5 w-full'></p>
                <section className='lg:mx-10' data-aos="fade-up">
                    <center><h1 className='text-4xl m-10'>MY WORKS</h1></center>
                    <center><h1 className='text-2xl m-10 text-orange-600'>Web Designs</h1></center>

                    <div className='lg:grid grid-cols-3 gap-4 m-5' data-aos="fade-up">
                        <div className='dark:bg-fdark1  rounded-md shadow shadow-gray-600 lg:p-10 py-7 px-5 flex flex-col justify-center space-y-2 lg:my-0 my-5'>
                            <RiComputerLine size={50} className='lg:block hidden mb-5' />
                            <h1 className='lg:text-xl'>LEARNING MANAGEMENT SYSTEM</h1>
                            <h1 className='lg:text-lg dark:text-violet-400'>Technologies Used</h1>
                            <ul className='flex space-x-2'>
                                <li>Nextjs</li>
                                <li>Taiwind Css</li>
                                <li>MongoDB</li>
                            </ul>
                            <div className='flex justify-between mt-2'>
                                <Link href='' target='_blank'><h1 className='flex items-center'>Project Link <FiExternalLink className='ml-7' /></h1></Link>
                                <Link href='https://github.com/Prathmesh895/Learning-management-system.git' target='_blank'><h1 className='flex items-center'>Github Link <FiExternalLink className='ml-7' /></h1></Link>
                            </div>
                        </div>
                        {/* card No 2  */}
                        <div data-aos="fade-up" className='dark:bg-fdark1  rounded-md shadow shadow-gray-600 lg:p-10 py-7 px-5   flex flex-col justify-center space-y-2 lg:my-0 my-5'>
                            <RiComputerLine size={50} className='lg:block hidden mb-5' />
                            <h1 className='lg:text-xl'>MY PORTFOILO</h1>
                            <h1 className='lg:text-lg dark:text-violet-400'>Technologies Used</h1>
                            <ul className='flex space-x-2'>
                                <li>Nextjs</li>
                                <li>Taiwind Css</li>
                                <li>MongoDB</li>
                            </ul>
                            <div className='flex justify-between mt-2'>
                                <Link href='https://prathmeshgatade-portfolio.vercel.app/' target='_blank'>
                                    <h1 className='flex items-center'>Project Link <FiExternalLink className='ml-7' /></h1>
                                </Link>
                                <Link href='https://github.com/Prathmesh895/Portfolio.git' target='_blank'>
                                    <h1 className='flex items-center'>Github Link <FiExternalLink className='ml-7' /></h1>
                                </Link>
                            </div>
                        </div>
                        {/* card no 3 */}
                        <div data-aos="fade-up" className='dark:bg-fdark1  rounded-md shadow shadow-gray-600 lg:p-10 py-7 px-5   flex flex-col justify-center space-y-2 lg:my-0 my-5'>
                            <RiComputerLine size={50} className='lg:block hidden mb-5' />
                            <h1 className='lg:text-xl'>QUIZ APPLICATION</h1>
                            <h1 className='lg:text-lg dark:text-violet-400'>Technologies Used</h1>
                            <ul className='flex space-x-2'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                            </ul>
                            <div className='flex justify-between mt-2'>
                                <Link href='https://quez-test.netlify.app/' target='_blank'><h1 className='flex items-center'>Project Link <FiExternalLink className='ml-7' /></h1></Link>
                                <Link href='https://github.com/Prathmesh895/quizeAssignment.git' target='_blank'><h1 className='flex items-center'>Github Link <FiExternalLink className='ml-7' /></h1></Link>
                            </div>
                        </div>
                        {/* card No 4  */}
                        <div data-aos="fade-up" className='dark:bg-fdark1  rounded-md shadow shadow-gray-600 lg:p-10 py-7 px-5   flex flex-col justify-center space-y-2 lg:my-0 my-5'>
                            <RiComputerLine size={50} className='lg:block hidden mb-5' />
                            <h1 className='lg:text-xl'>STATIC LINKEDIN HOME PAGE</h1>
                            <h1 className='lg:text-lg dark:text-violet-400'>Technologies Used</h1>
                            <ul className='flex space-x-2'>
                                <li>HTML</li>
                                <li>CSS</li>

                            </ul>
                            <div className='flex justify-between mt-2'>
                                <Link href='' target='_blank'><h1 className='flex items-center'>Project Link <FiExternalLink className='ml-7' /></h1></Link>
                                <Link href='https://github.com/Prathmesh895/Lindinpage.git' target='_blank'><h1 className='flex items-center'>Github Link <FiExternalLink className='ml-7' /></h1></Link>
                            </div>
                        </div>
                        {/* card No 5 */}
                        <div data-aos="fade-up" className='dark:bg-fdark1  rounded-md shadow shadow-gray-600 lg:p-10 py-7 px-5   flex flex-col justify-center space-y-2 lg:my-0 my-5'>
                            <RiComputerLine size={50} className='lg:block hidden mb-5' />
                            <h1 className='lg:text-xl'>REVIEW INBOX</h1>
                            <h1 className='lg:text-lg dark:text-violet-400'>Technologies Used</h1>
                            <ul className='flex space-x-2'>
                                <li>React + Vite</li>
                                <li>Taiwind Css</li>
                            </ul>
                            <div className='flex justify-between mt-2'>
                                <Link href='https://reviewinbox.netlify.app/' target='_blank'><h1 className='flex items-center'>Project Link <FiExternalLink className='ml-7' /></h1></Link>
                                <Link href='https://github.com/Prathmesh895/Review_inbox.git' target='_blank'><h1 className='flex items-center'>Github Link <FiExternalLink className='ml-7' /></h1></Link>
                            </div>
                        </div>
                        {/* card No 6  */}
                        <div data-aos="fade-up" className='dark:bg-fdark1  rounded-md shadow shadow-gray-600 lg:p-10 py-7 px-5   flex flex-col justify-center space-y-2 lg:my-0 my-5'>
                            <RiComputerLine size={50} className='lg:block hidden mb-5' />
                            <h1 className='lg:text-xl'>INSTAGRAM LOGO</h1>
                            <h1 className='lg:text-lg dark:text-violet-400'>Technologies Used</h1>
                            <ul className='flex space-x-2'>
                                <li>HTML</li>
                                <li>CSS</li>

                            </ul>
                            <div className='flex justify-between mt-2'>
                                <Link href='https://prathmesh-insta-icon.netlify.app/' target='_blank'><h1 className='flex items-center'>Project Link <FiExternalLink className='ml-7' /></h1></Link>
                                <Link href='https://github.com/Prathmesh895/instagramlogo1.git' target='_blank'><h1 className='flex items-center'>Github Link <FiExternalLink className='ml-7' /></h1></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </AOSWrapper>
        </>
    )
}

export default page


export const metadata = {
    title: "Portfolio",
    description: "Projects",
  };