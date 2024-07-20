import React from 'react'
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/dashboard/sidebar';
export default async function layout({ children }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect('/Login');
        return null; // Ensure that the function returns null after redirection
      }

  return (
    <div className='flex lg:flex-row flex-col lg:space-x-5 mt-0'>
        <div className='lg:w-[16%]'><Sidebar/></div>
        <div className='lg:w-[80%] lg:border-x dark:border-slate-800 lg:p-5'> {children}</div>
    </div>
  )
}
