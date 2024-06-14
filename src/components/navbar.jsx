'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes';
import Theme from '@/components/theme'
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { usePathname } from 'next/navigation'

function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const { theme } = useTheme();
    const Navref = useRef();
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (Navref.current && !Navref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleDownload = () => {
        window.open('/Prathmesh-Gatade.pdf', '_blank');
    };
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
        // <section className={`fixed top-0 left-0 w-full   z-${zIndex}`}>
        //     <nav className='flex justify-between px-6 lg:px-36 py-2 dark:bg-black  border-b dark:border-gray-700 font-semibold  items-center w-full'>
        //         <div className=' lg:flex space-x-10  text-lg items-center hidden'>
        //             <div className='text-2xl'>Prathmesh Gatade</div>
        //             {Navcontent.map((link, index) => (
        //                 <p key={index} className='py-1 px-4 rounded-3xl dark:hover:text-white dark:text-gray-500'>
        //                     <Link href={link.href} >
        //                         <span className={`${pathname === link.href ? 'text-white' : ''}`}>{link.title}</span>
        //                     </Link>
        //                 </p>
        //             ))}
        //             {/* <h1 className=' py-1 px-4 rounded-3xl dark:hover:bg-gray-700 '><Link href='/hire_me'>Hire Me</Link></h1> */}
        //             <button onClick={handleDownload} className=' py-2 px-4 rounded border-orange-600 border'>DOWNLOAD CV</button>
        //             <h1><Theme /></h1>
        //         </div>

        //         {/* Toggle menu for mobile screen */}
        //         <div ref={Navref} className='text-lg lg:hidden relative z-20 h-12 '>
        //             <div className='flex items-center justify-between'>
        //                 <div className='text-2xl'>Prathmesh Gatade</div>
        //                 <div className='flex items-center space-x-3'>
        //                     <h1 className='text-lg'><Theme /></h1>

        //                     <button onClick={handleOnchange}>
        //                         <RiMenu3Fill size={27} />
        //                     </button>
        //                 </div>
        //             </div>
        //             <div className={open ? "fixed left-0 top-0 w-[90%] h-screen z-50  ease-in duration-500" :
        //                 "fixed left-[-110%] top-0 p-6 bg-slate-500"}>
        //                 <div className='p-3 justify-end flex ' onClick={handleOnchange}>
        //                     <AiOutlineClose className='border bg-white dark:bg-bdark p-2 rounded-full' size={40} />
        //                 </div>
        //                 <div className='flex flex-col px-10 space-y-3'>
        //                     {Navcontent.map((link, index) => (
        //                         <Link href={link.href} key={index} onClick={handleOnchange}>{link.title}</Link>
        //                     ))}
        //                     <h1 className=''>
        //                         Follow me
        //                     </h1>
        //                     <div className='flex space-x-4 items-center'>
        //                         <Link href='https://www.linkedin.com/in/prathmesh-guruling-gatade/' target='_blank'>  <AiOutlineLinkedin size={32} /> </Link>
        //                         <Link href='https://github.com/Prathmesh895' target='_blank'><BsGithub size={29} /></Link>
        //                         <Link href='https://www.instagram.com/mi_prathmeshgatade/' target='_blank'> <BsInstagram size={28} /></Link>
        //                     </div>
        //                 </div>

        //             </div>
        //         </div>

        //     </nav>


        // </section>


        <section className={`fixed top-0 left-0 w-full   z-${zIndex}`}>
            {/* nav for lg view  */}
            <nav className=' hidden lg:flex justify-between px-6 lg:px-36 py-2 dark:bg-black  border-b dark:border-gray-700 font-semibold  items-center w-full'>
                <div className=' lg:flex space-x-5  text-lg items-center'>
                    <div className='text-2xl'>Prathmesh Gatade</div>
                    {Navcontent.map((link, index) => (
                        <p key={index} className='py-1 px-4 rounded-3xl dark:hover:text-white dark:text-gray-500'>
                            <Link href={link.href} >
                                <span className={`${pathname === link.href ? 'text-white' : ''}`}>{link.title}</span>
                            </Link>
                        </p>
                    ))}
                    {/* <h1 className=' py-1 px-4 rounded-3xl dark:hover:bg-gray-700 '><Link href='/hire_me'>Hire Me</Link></h1> */}

                </div>
                <div className='flex space-x-4 items-center'>
                    <button onClick={handleDownload} className=' py-2 px-4 rounded border-orange-600 border'>DOWNLOAD CV</button>
                    <h1><Theme /></h1>
                </div>
            </nav>

            <nav className='border-b dark:border-gray-700 dark:bg-black'>
                <div ref={Navref} className='text-lg lg:hidden relative z-20  '>
                    <div className='flex items-center justify-between px-6 py-9 h-12'>
                        <div className='text-2xl'>Prathmesh Gatade</div>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-lg'><Theme /></h1>

                            <button onClick={handleOnchange}>
                                <RiMenu3Fill size={27} />
                            </button>
                        </div>
                    </div>
                    <div className={open ? "fixed left-0 top-0 w-[90%] h-screen z-50  bg-black ease-in duration-500" :
                        "fixed left-[-110%] top-0 p-6 bg-slate-500"}>
                        <div className='p-3 justify-end flex ' onClick={handleOnchange}>
                            <AiOutlineClose className='border bg-white dark:bg-bdark p-2 rounded-full' size={40} />
                        </div>
                        <div className='flex flex-col px-10 space-y-3'>
                            {Navcontent.map((link, index) => (
                                <Link href={link.href} key={index} onClick={handleOnchange}>
                                   <span className={`${pathname === link.href ? 'dark:text-white' : 'dark:text-#696969'}`}>{link.title}</span>
                                    </Link>
                            ))}
                            <h1 className='dark:text-#696969'>
                                Follow me
                            </h1>
                            <div className='flex space-x-4 items-center dark:text-#696969'>
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