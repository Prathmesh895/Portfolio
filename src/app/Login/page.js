"use client"
import React from 'react'
import { useState } from 'react'
import bcrypt from 'bcryptjs'
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";


export default function page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const[error,setError]=useState('')
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const res = await signIn("credentials", {
          email,
          password:hashedPassword,
          redirect: false,
      });

      if (res.error) {
          setError("Invalid Credentials");
          return;
        }
        router.replace("masseges");
  } catch (error) {
      console.log(error);
  }
  }

  return (
    <>
    <title>Login Page for Prathmesh</title>
      <section className=' flex items-center justify-center flex-col lg:m-44 my-44 lg:my-0'>
        <div className='lg:w-1/3 bg-black rounded-lg'>
          <div>
            <center><h1 className='text-2xl mt-10'>Hi Welcome</h1></center>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-5 w-full p-5'>
            <div className='w-full'>
              <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Your Email'
                className='w-full'
              />
            </div>
            <div className='w-full'>
              <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Password'
                className='w-full'
              />
            </div>
            <button >Submit</button>
          </form>

        </div>
      </section>
    </>
  )
}


