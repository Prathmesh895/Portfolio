'use client'
import React from 'react'
import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function page() {
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[phone,setPhone]=useState('');
const[subject,setSubject]=useState('');
const[massege,setMassege]=useState('');

  const handleOnsubmit= async (e)=>{
    e.preventDefault();

    console.log(name,email,phone,subject,massege);
    try {
      const res= await fetch('/api/massege', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          massege  
        }),
      })
     
    } catch (error) {
      console.log("Unable to send Masseage")
    }

  }
  return (
    <>
      <div className='dark:bg-fdark1 lg:h-96 h-52 flex items-center lg:mt-0 mt-20'>
        <h1 className='text-6xl lg:pl-36 lg:w-1/2  animate-slideUp m-auto lg:m-0'>CONTACT</h1>
      </div>
      <p className='bg-orange-400 h-0.5 w-full'></p>
      <section className='flex flex-col  items-center lg:mt-36 mt-10 mb-10 space-y-6'>
        <h1 className='text-lg text-orange-400'>C O N T A C T &nbsp; M E </h1>
        <h1 className='lg:text-6xl text-2xl'>LET’S START A NEW PROJECT</h1>
      </section>
      <section className='lg:mx-36 m-5 lg:flex'>
        <div className='w-1/3 lg:block hidden'>
          <div className='flex items-center space-x-4 mt-5'>
            <h1 className='dark:bg-fdark bg-orange-300 rounded-full p-3'><FaLocationDot size={30} /></h1>
            <h1 className='text-xl'> Location <br />Pune,Maharashtra</h1>
          </div>
          <div className='flex items-center space-x-4 mt-5'>
            <h1 className='dark:bg-fdark bg-orange-300 rounded-full p-3'><BsTelephoneFill size={30} /></h1>
            <h1 className='text-xl'> Phone <br /> +91 8956146149</h1>
          </div>
          <div className='lg:flex items-center space-x-4 mt-5'>
            <h1 className='dark:bg-fdark bg-orange-300 rounded-full p-3'><MdEmail size={30} /></h1>
            <h1 className='text-xl'> Email <br />prathmeshgatade895@gmail.com</h1>
          </div>
        </div>

        <form onSubmit={handleOnsubmit} >
          <div className='grid lg:grid-cols-2 grid-cols-1  gap-4 '>
            <div>
              <input type="text"
                className='w-full'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder='Your name'
              />
            </div>
            <div>
              <input type="email"
                className='w-full'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Your Email' />
            </div>
            <div>
              <input type="number"
                className='w-full'
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                placeholder='Your Phone' />
            </div>
            <div>
              <input type="text"
                className='w-full'
                value={subject}
                onChange={(e)=>setSubject(e.target.value)}
                placeholder='Your Subject' />
            </div>
            <div>
              <textarea name="" cols="60" rows="5"
                className='w-full dark:bg-bdark p-3 rounded-md border dark:border-gray-600'
                value={massege}
                onChange={(e)=>setMassege(e.target.value)}
                placeholder='Enter Message' />
            </div>
          </div>
          <button className=' py-3 my-5 lg:w-1/3 w-full rounded-md border bg-orange-400 dark:border-gray-600 hover:bg-green'>SUBMIT NOW</button>
        </form>

      </section>
    </>
  )
}

