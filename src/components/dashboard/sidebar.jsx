import React from 'react';
import Image from 'next/image';
import { GoProjectSymlink } from "react-icons/go";
import { TbMessage } from "react-icons/tb";
import { RiPagesLine } from "react-icons/ri";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuContact } from "react-icons/lu";
import { HiOutlineDocumentText } from "react-icons/hi2";
import Link from 'next/link';

const sidebarlist = [
    { title: 'Projects', link: '/dashboard/project', icon: GoProjectSymlink },
    { title: 'Messages', link: '/dashboard/messages', icon: TbMessage },
    { title: 'Blogs', link: '/dashboard/blogs', icon: RiPagesLine },
    { title: 'Companies', link: '/dashboard/companies', icon: HiOutlineBuildingOffice2 },
    { title: 'Hrs Contact', link: '/dashboard/hrContact', icon: LuContact },
    { title: 'Resumes', link: '/dashboard/resumes', icon: HiOutlineDocumentText },
];

function Sidebar() {
    return (
        <section className='lg:min-h-screen border-r dark:border-gray-800 lg:mt-0'>
            <div className='border-b dark:border-gray-800 p-5'>
                {/* <Image src='/my-photo.png' width={30} height={30} alt='my photo' className='rounded-full w-20 h-20' /> */}
                <h1 className='text-xl font-serif font-semibold text-center hidden lg:block'>Dashboard</h1>
            </div>
            <ul className='lg:grid lg:grid-cols-1 lg:divide-y dark:divide-slate-900 lg:justify-center flex overflow-scroll lg:overflow-visible'>
                {sidebarlist.map((data, index) => (
                    <li key={index} className='py-5 flex px-10 cursor-pointer hover:dark:bg-slate-900 hover:bg-slate-100'>
                        <Link href={data.link} className='flex items-center space-x-3'>
                            {data.icon && <data.icon className='mr-2' size={20} />}
                            <span>{data.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Sidebar;
