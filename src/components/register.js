"use client"
import React from 'react'
import { useState } from 'react'
function page() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState("");

  const handleonSubmit= async (e)=>{
    e.preventDefault();

    try {
      const res = await fetch ('api/register',{
        method:'POST',
        headers:{
          "Content-type": "application/json"
        },
        body:JSON.stringify({
          email,
          password
        })
      })
      if (res.ok) {
        const form = e.target;
        form.reset();
       
    } else {
        console.log("cannot register user")
    }
    } catch (error) {
      console.log("Unable to register user")
    }
  }

  return (
    <>
    <section className=' flex items-center justify-center flex-col lg:m-44 my-44 lg:my-0'>
      <div className='lg:w-1/3 bg-black rounded-lg'>
    <div>
      <center><h1 className='text-2xl mt-10'>Hi Welcome</h1></center>
    </div>
      <form onSubmit={handleonSubmit} className='flex flex-col items-center space-y-5 w-full p-5'>
        <div className='w-full'>
          <input type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter Your Email'
            className='w-full'
          />
        </div>
        <div className='w-full'>
          <input type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Enter Password'
            className='w-full'
          />
        </div>
        <button >Submit</button>
      </form>
      registration
      </div>
      </section>
    </>
  )
}

export default page