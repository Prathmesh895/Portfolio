'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes';
import Theme from '@/components/theme'
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Navbar() {
    const [open, setOpen] = useState('');
    const { theme } = useTheme();
  
  // Determine the z-index value based on the theme
  const zIndex = theme === 'dark' ? 10 : 50;


    const handleOnchange = () => {
        setOpen(!open)
    }

    const Navcontent = [
        { title: 'HOME', href: '/' },
        { title: 'ABOUT', href: '/about' },
        { title: 'PORTFOLIO', href: '/portfolio' },
        { title: 'CONTACT', href: '/contact' },
    ]
    return (
        <section className={`fixed top-0 left-0 w-full bg-white dark:bg-fdark shadow-lg z-${zIndex}`}>
            <nav className='flex justify-between px-6 lg:px-36 py-4 dark:shadow shadow font-semibold  items-center w-full'>
                <div className='text-2xl'>Prathmesh Gatade</div>

                <div className=' lg:flex space-x-10  text-lg items-center hidden'>
                    {Navcontent.map((link, index) => (
                        <p className='py-1 px-4 rounded-3xl dark:hover:bg-gray-700 ' key={index}>
                            <Link href={link.href} >{link.title}</Link>
                        </p>
                    ))}
                    <h1 className=' py-1 px-4 rounded-3xl dark:hover:bg-gray-700 '><Link href='/hire_me'>Hire Me</Link></h1>
                    <h1 className=' py-2 px-4 rounded border-orange-600 border'><Link href=''>DOWNLOAD CV</Link></h1>
                    <h1><Theme /></h1>
                </div>
                <div className='text-lg lg:hidden'>
                    <h1 ><Theme /></h1>
                </div>
                {/* Toggle menu for mobile screen */}
                <div className='text-lg lg:hidden relative z-20 h-12 flex'>
                    <button onClick={handleOnchange}>
                        <RiMenu3Fill size={27} />
                    </button>
                    <div className={open ? "fixed left-0 top-0 w-[90%] h-screen z-50 dark:bg-fdark bg-white ease-in duration-500" :
                        "fixed left-[-110%] top-0 p-6 bg-slate-500"}>
                        <div className='p-3 justify-end flex ' onClick={handleOnchange}>
                            <AiOutlineClose className='border bg-white dark:bg-bdark p-2 rounded-full' size={40} />
                        </div>
                        <div className='flex flex-col px-10 space-y-3'>
                            {Navcontent.map((link, index) => (
                                <Link href={link.href} key={index}>{link.title}</Link>
                            ))}
                            <h1 className=''>
                                Follow me
                            </h1>
                            <div className='flex space-x-4 items-center'>
                                <Link href='https://www.linkedin.com/in/prathmesh-guruling-gatade/' target='_blank'>  <AiOutlineLinkedin size={32} /> </Link>
                                <Link href='https://github.com/Prathmesh895' target='_blank'><BsGithub size={29} /></Link>
                                <Link href='https://www.instagram.com/mi_prathmeshgatade/' target='_blank'> <BsInstagram size={28} /></Link>
                            </div>
                        </div>

                    </div>
                </div>

            </nav>
        </section>
    );
};

export default Navbar