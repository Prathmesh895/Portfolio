// import React from 'react'
// import StyledText from '@/components/styles'
// import { RiReactjsFill } from "react-icons/ri";
// import { BiLogoHtml5 } from "react-icons/bi";
// import { BiLogoCss3 } from "react-icons/bi";
// import { TbBrandTailwind } from "react-icons/tb";
// import { SiJavascript } from "react-icons/si";
// import { TbBrandNextjs } from "react-icons/tb";
// import { FaNodeJs } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";
// import { BsGit } from "react-icons/bs";
// import { AiFillGithub } from "react-icons/ai";
// import { SiPostman } from "react-icons/si";
// import { SiTypescript } from "react-icons/si";

// function skills() {
//     return (

//         <>
//             <StyledText className='lg:text-5xl'>Skills</StyledText>
//             <section className='grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-4 lg:m-10 m-5'>
//                 <div className='dark:bg-fdark1 p-5 flex items-center justify-center'>
//                     <BiLogoHtml5 size={50} className='mr-2' /><span className='lg:text-2xl'>HTML5</span>
//                 </div>
//                 <div className='dark:bg-fdark1 p-5 flex items-center justify-center'>
//                     <BiLogoCss3 size={50} className='spin-slow hover:animate-spin' /><span className='lg:text-2xl'>CSS5</span>
//                 </div>
//                 <div className='dark:bg-fdark1 p-5 flex items-center justify-center'>
//                     <TbBrandTailwind size={50} className='spin-slow hover:animate-spin'/>
//                     <span className='lg:text-2xl'>Tailwind CSS</span>
//                 </div>
//                 <div className='dark:bg-fdark1 p-5 flex items-center justify-center'>
//                     <SiJavascript size={40} className='spin-slow hover:animate-spin'/>
//                     <span className='lg:text-2xl'>Javascript</span>
//                 </div>
//                 <div className='dark:bg-fdark1 p-5 flex items-center justify-center'>
//                     <RiReactjsFill size={50} className='spin-slow hover:animate-spin' />
//                     <span className='lg:text-2xl'>Reactjs</span>

//                 </div>
//                 <div className='dark:bg-fdark1 p-5 flex items-center justify-center'>
//                     <TbBrandNextjs size={50} className='spin-slow hover:animate-spin'/>
//                     <span className='lg:text-2xl'>Nextjs</span>
//                 </div>
//                 <div className='dark:bg-fdark1 p-5 flex items-center justify-center'>
//                     <FaNodeJs size={40} className='spin-slow hover:animate-spin'/>
//                     <span className='lg:text-2xl'>NodeJs</span>
//                 </div>
//                 <div className='dark:bg-fdark1 p-5 flex items-center justify-center'>
//                     <SiMongodb size={40} className='spin-slow hover:animate-spin'/>
//                     <span className='lg:text-2xl'>Mongodb</span>
//                 </div>
//                 <div className='dark:bg-fdark1 p-5 flex items-center justify-center'>
//                     <BsGit size={40} className='spin-slow hover:animate-spin'/>
//                     <span className='lg:text-2xl'>Git</span>
//                 </div>
//                 <div className='dark:bg-fdark1 p-5 flex items-center justify-center'>
//                     <AiFillGithub size={40} className='spin-slow hover:animate-spin'/>
//                     <span className='lg:text-2xl'>Github</span>
//                 </div>
//                 <div className='dark:bg-fdark1 p-5 flex items-center justify-center'>
//                     <SiPostman size={40} className='spin-slow hover:animate-spin'/>
//                     <span className='lg:text-2xl'>Postman</span>
//                 </div>
//                 <div className='dark:bg-fdark1 p-5 flex items-center justify-center'>
//                     <SiTypescript size={38} className='spin-slow hover:animate-spin'/>
//                     <span className='lg:text-2xl'>Typescript</span>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default skills

import React from 'react';
import StyledText from '@/components/styles';
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";
import { TbBrandTailwind, TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiMongodb, SiPostman, SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";


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
    return (
        <>
            <center className='lg:text-4xl'>SKILLS</center>
            <section className='grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-4 lg:m-10 m-5'>
                {skillsData.map((item, index) => (
                    <div key={index} className='dark:bg-fdark1 p-5 flex hover:dark:bg-slate-700 transition-all duration-300 ease-linear items-center justify-center'>
                        <item.Icon size={40} className={`hover:${item.animation}  mr-5`} />
                        <span className='lg:text-2xl'>{item.text}</span>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Skills;
