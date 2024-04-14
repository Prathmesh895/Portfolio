'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Theme from '@/components/theme'
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from 'react-icons/ai';

function Navbar() {
    const [open, setOpen] = useState('');

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
        <section className='dark:bg-fdark'>
            <nav className='flex justify-between px-6  lg:px-36 py-3 dark:shadow shadow font-semibold  items-center w-full'>
                <div className='text-2xl'>Prathmesh Gatade</div>

                <div className=' lg:flex space-x-10  text-lg items-center hidden'>
                    {Navcontent.map((link, index) => (
                        <p key={index}>
                            <Link href={link.href}>{link.title}</Link>
                        </p>
                    ))}
                    <h1 className=' py-2 px-4 rounded-3xl'><Link href='/hire_me'>Hire Me</Link></h1>
                    <h1 className=' py-2 px-4 rounded border-orange-600 border'><Link href=''>DOWNLOAD CV</Link></h1>
                    <h1 className='bg-gray-400 p-1 rounded-full'><Theme /></h1>
                </div>
                <div className='text-lg lg:hidden'>
                    <h1 className='bg-gray-400 p-1 rounded-full w-7'><Theme /></h1>
                </div>
                {/* Toggle menu for mobile screen */}
                <div className='text-lg lg:hidden'>
                    <button onClick={handleOnchange}>
                        <RiMenu3Fill size={27} />
                    </button>
                    <div className={open ? "fixed left-0 top-0 w-[90%] h-screen z-50 dark:bg-fdark bg-white ease-in duration-500" :
                        "fixed left-[-110%] top-0 p-6 bg-slate-500"}>
                        <div className='p-3 justify-end flex ' onClick={handleOnchange}>
                            <AiOutlineClose className='border bg-white dark:bg-orange-700 p-2 rounded-full' size={40} />
                        </div>
                        <div className='flex flex-col px-10 space-y-3'>
                            {Navcontent.map(item => (
                                <p key={item.link}>{item.title}</p>
                            ))}
                            <h1>
                                Follow me
                            </h1>
                            div
                        </div>

                    </div>
                </div>

            </nav>
        </section>
    );
};

export default Navbar