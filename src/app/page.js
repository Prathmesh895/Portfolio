import React from 'react'
import Image from 'next/image'
import PROF from '/public/file.png'

function homepage() {
  return (
    <main className='dark:bg-bdark h-screen'>
    <section className='flex lg:mx-36 mx-6 lg:items-center'>
      <div className='lg:w-1/2 space-y-10 mt-32 flex flex-col items-center  lg:items-start   '>
        <h1 className='text-orange-600 text-2xl animate-slideRight'>HELLO I'M</h1>
        <p className='lg:text-8xl text-5xl flex flex-col items-center lg:items-start lg:space-y-3 '>
          <span className='animate-slideLeft'>PRATHMESH</span>
          <span className='animate-slideRight'>GATADE</span>
        </p>
        <h1 className='text-orange-600 text-2xl  animate-slideLeft'>A PASSIONATE FULL-STACK WEB DEVELOPER</h1>
        <button className=' text-lg text-white p-2 bg-orange-600'>SAY HELLO</button>
      </div>
      {/* PHOTO SECTION */}
      {/* <div className='lg:w-1/2 rounded-full'>
        <Image className='rounded-full' src={PROF}/>
      </div> */}
      </section>
      </main>
   
  )
}

export default homepage