'use client';
import React, { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Page() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/Login');
  }, [session, status, router]);

  useEffect(() => {
    if (session) {
      fetchUser();
    }
  }, [session]);

  const fetchUser = async () => {
    try {
      const res = await fetch('/api/massege', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setUserData(data.users); // Set the fetched user data to state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='mt-36'>
        <center> Message Received</center>
      </div>
      <div className='p-4 overflow-scroll sm:overflow-visible'>
        <table className='w-full mt-4 border-collapse border'>
          <thead>
            <tr className='border'>
              <th className='text-left border px-4 py-2'>Sr</th>
              <th className='text-left border px-4 py-2'>Username</th>
              <th className='text-left border px-4 py-2'>Email</th>
              <th className='text-left border px-4 py-2'>Mobile</th>
              <th className='text-left border px-4 py-2'>Subject</th>
              <th className='text-left border px-4 py-2'>Message</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={user._id} className='border'>
                <td className='border px-4 py-2'>{index + 1}</td>
                <td className='border px-4 py-2'>{user.name}</td>
                <td className='border px-4 py-2'>{user.email}</td>
                <td className='border px-4 py-2'>{user.phone}</td>
                <td className='border px-4 py-2'>{user.subject}</td>
                <td className='border px-4 py-2'>{user.massege}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => signOut()}
        className='bg-red-500 text-white font-bold px-6 py-2 mt-3'
      >
        Log Out
      </button>
    </>
  );
}

export default Page;
