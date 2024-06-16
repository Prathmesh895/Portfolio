"use client"
import React, { useEffect } from 'react';
import StyledText from '@/components/styles';
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";
import { TbBrandTailwind, TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiMongodb, SiPostman, SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import 'aos/dist/aos.css';
import AOS from 'aos';


const skillsData = [
    { Icon: BiLogoHtml5, text: 'HTML5', animation: 'spin-slow' },
    { Icon: BiLogoCss3, text: 'CSS3', animation: 'spin-fast' },
    { Icon: TbBrandTailwind, text: 'Tailwind CSS', animation: '' },
    { Icon: SiJavascript, text: 'Javascript', animation: '' },
    { Icon: RiReactjsFill, text: 'Reactjs', animation: 'animate-spin' },
    { Icon: TbBrandNextjs, text: 'Nextjs', animation: '' },
    { Icon: FaNodeJs, text: 'NodeJs', animation: '' },
    { Icon: SiMongodb, text: 'Mongodb', animation: '' },
    { Icon: BsGit, text: 'Git', animation: '' },
    { Icon: AiFillGithub, text: 'Github', animation: '' },
    { Icon: SiPostman, text: 'Postman', animation: '' },
    { Icon: SiTypescript, text: 'Typescript', animation: '' }
];

function Skills() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
    return (
        <>
            <center className='lg:text-4xl mt-20' data-aos="fade-up">SKILLS</center>
            <section className='grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-4 lg:m-10 m-5' data-aos="fade-up">
                {skillsData.map((item, index) => (
                    <div key={index} className='dark:bg-fdark1 p-5 border flex hover:dark:bg-slate-700 transition-all duration-300 ease-linear items-center justify-center'>
                        <item.Icon size={40} className={`hover:${item.animation}  mr-5`} />
                        <span className='lg:text-2xl'>{item.text}</span>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Skills;
