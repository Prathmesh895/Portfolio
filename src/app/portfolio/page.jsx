import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { RiComputerLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import AOSWrapper from '@/components/aoswrapper';


function page() {

    const projectData = [
        { title: 'LEARNING MANAGEMENT SYSTEM', techologiesUsed: 'Nextjs,Taiwind Css,MongoDB', PLink: 'https://learnacademy.vercel.app/', Glink: 'https://github.com/Prathmesh895/Learning-management-system.git', img: '/LMS-homepage.png' },
        { title: 'MY PORTFOILO', techologiesUsed: 'Nextjs,Taiwind Css,MongoDB', PLink: 'https://prathmeshgatade-portfolio.vercel.app/', Glink: 'https://github.com/Prathmesh895/Portfolio.git', img: '/portfolio.png' },
        { title: 'Redux-Shop-cart', techologiesUsed: '', PLink: 'https://nextjs-redux-shop-cart.vercel.app/', Glink: 'https://github.com/Prathmesh895/Nextjs-Redux-Shop-cart.git', img: '/shopcart.png' },
        { title: 'REVIEW INBOX', techologiesUsed: 'React + Vite ,Tailwindcss', PLink: 'https://reviewinbox.netlify.app/', Glink: 'https://github.com/Prathmesh895/Review_inbox.git', img: '/reviewbox.png' },
        { title: 'QUIZ APPLICATION', techologiesUsed: 'HTML,CSS,Javascript', PLink: 'https://quez-test.netlify.app/', Glink: 'https://github.com/Prathmesh895/quizeAssignment.git', img: '/quiz.png' },
        { title: 'STATIC LINKEDIN HOME PAGE', techologiesUsed: 'HTML,CSS', PLink: 'https://github.com/Prathmesh895/Lindinpage.git', Glink: 'https://github.com/Prathmesh895/Lindinpage.git', img: '' },
        { title: 'INSTAGRAM LOGO', techologiesUsed: 'HTML,CSS', PLink: 'https://prathmesh-insta-icon.netlify.app/', Glink: 'https://github.com/Prathmesh895/instagramlogo1.git', img: '/instalogo.png' },
    ]

    return (
        <>
            <AOSWrapper>
                <div className=' lg:h-96 h-52 flex items-center lg:mt-0 mt-20'>
                    <h1 className='text-6xl lg:pl-36 lg:w-1/2 m-auto lg:m-0' data-aos="fade-up">PORTFOLIO</h1>
                </div>
                <p className='bg-orange-400 h-0.5 w-full'></p>
                <section className='lg:mx-10' data-aos="fade-up">
                    <center><h1 className='text-4xl m-10'>MY WORKS</h1></center>
                    <center><h1 className='text-2xl m-10 text-orange-600'>Web Designs</h1></center>

                    <div className='lg:grid grid-cols-3 gap-4 m-5' data-aos="fade-up">
                        {
                            projectData.map((data, index) => (
                                <>
                                    <div className='border border-gray-700 rounded-md shadowlg:p-5 py-7 px-5 flex flex-col justify-center space-y-2 lg:my-0 my-5 scale-100 hover:scale-105' key={index} data-aos="fade-up">        
                                        <Image src={data.img} alt='LMS-homepage' width={500} height={400} className='' />
                                        <h1 className='lg:text-xl'>{data.title}</h1>
                                        <h1 className='lg:text-lg dark:text-violet-400'>Technologies Used</h1>
                                        <ul className='flex space-x-2'>
                                            <li>Nextjs</li>
                                            <li>Taiwind Css</li>
                                            <li>MongoDB</li>
                                        </ul>
                                        <div className='flex justify-between mt-2'>
                                            <Link href={data.PLink} target='_blank'><h1 className='flex items-center'>Project Link <FiExternalLink className='ml-7' /></h1></Link>
                                            <Link href={data.Glink} target='_blank'><h1 className='flex items-center'>Github Link <FiExternalLink className='ml-7' /></h1></Link>
                                        </div>
                                    </div>
                                </>

                            ))
                        }

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