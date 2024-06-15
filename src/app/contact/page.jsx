'use client'
import React from 'react'
import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import AOSWrapper from '@/components/aoswrapper';
import Svg from '/public/undraw_join_re_w1lh.svg'



export default function page() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [massege, setMassege] = useState('');
  const [isSend, setIssend] = useState('');
  const [errors, setErrors] = useState({
    name: '', email: '', phone: '',
    subject: '', massege: '', isSend: '',
  })
  const handleOnsubmit = async (e) => {
    e.preventDefault();

    let newError = {};
    if (!name) newError.name = 'Please Enter the Name';
    if (!email) newError.email = 'Please Enter the Email';
    if (!phone) newError.phone = 'Please Enter the Phone';
    if (!subject) newError.subject = 'Please Enter the Subject';
    if (!massege) newError.massege = 'Please Enter the Massege';
    if (Object.keys(newError).length > 0) {
      setErrors(newError);
      setErrors(prev => ({ ...prev, general: 'Enter All fields' }))
    }

    // console.log(name,email,phone,subject,massege);
    try {
      const res = await fetch('/api/massege', {
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
      });
      if (res.ok) {
        setIssend("Message send Successfully");
        setTimeout(() => {
          setIssend("");
        }, 4000);
        setEmail('');
        setMassege('');
        setPhone('');
        setSubject('');
        setName("");
        setErrors('');
        // console.log("messege send")
      } else {
        setErrors(prev => ({ ...prev, general: 'Unable to send Message' }));

      }
    } catch (error) {
      setErrors(prev => ({ ...prev, general: 'Unable to send Message' }));
    }

  }
  return (
    <>
      <AOSWrapper>
        <div className=' lg:h-96 h-52 flex items-center lg:mt-0 mt-20' data-aos="fade-up">
          <h1 className='text-6xl lg:pl-36 lg:w-1/2 m-auto lg:m-0'>CONTACT</h1>
        </div>
        <p className='bg-orange-400 h-0.5 w-full'></p>
        <section className='flex flex-col  items-center lg:mt-36 mt-10 mb-10 space-y-6 ' data-aos="fade-up">
          <h1 className='text-lg text-orange-400'>C O N T A C T &nbsp; M E </h1>
          <h1 className='lg:text-6xl text-2xl'>LET’S START A NEW PROJECT</h1>
          <div className='lg:block hidden'>
            <h1 className='text-green text-lg'>
              {isSend &&
              <>
                <img src='/undraw_join_re_w1lh.svg' alt="svg" width={100} height={100} />
                {isSend}
              </>
              
              }
            </h1>
            <p className='text-red-500 text-lg animate-bounce'>
              {errors.general  && 
              <>
              <img src="/error.svg" alt="error.svg" width={100} height={100}/>
              {errors.general}
              </>
              }

            </p>
          </div>
        </section>
        <section className='lg:mx-36 m-5 lg:flex' data-aos="fade-up">
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

          <form onSubmit={handleOnsubmit} data-aos="fade-up">
            <div className='grid lg:grid-cols-2 grid-cols-1  gap-4 '>
              <div>
                <input type="text"
                  className='w-full'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Your name'
                />
                <p className='text-red-400 text-sm'>{errors.name}</p>
              </div>
              <div>
                <input type="email"
                  className='w-full'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Your Email' />
                <p className='text-red-400 text-sm'>{errors.email}</p>
              </div>
              <div>
                <input type="number"
                  className='w-full'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='Your Phone' />
                <p className='text-red-400 text-sm'>{errors.phone}</p>
              </div>
              <div>
                <input type="text"
                  className='w-full'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder='Your Subject' />
                <p className='text-red-400 text-sm'>{errors.subject}</p>
              </div>
              <div>
                <textarea name="" cols="60" rows="5"
                  className='w-full dark:bg-bdark p-3 rounded-md border dark:border-gray-600'
                  value={massege}
                  onChange={(e) => setMassege(e.target.value)}
                  placeholder='Enter Message' />
                <p className='text-red-400 text-sm'>{errors.massege}</p>
              </div>
            </div>
            <div className='lg:hidden text-lg'>
              <center>
                <h1 className='text-green'>
                  {isSend &&
                    <img src='/undraw_join_re_w1lh.svg' alt="svg" width={100} height={100} />
                  }

                </h1>
                <p className='text-red-600 mt-5 animate-bounce'>{errors.general}</p>
              </center>
            </div>
            <button className=' py-3 my-5 lg:w-1/3 w-full rounded-md border bg-orange-400 dark:border-gray-600 hover:bg-green'>SUBMIT NOW</button>
          </form>
        </section>
      </AOSWrapper>
    </>
  )
}


