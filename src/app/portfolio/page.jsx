import React from 'react'

function page() {
    return (
        <>
            <div className='dark:bg-fdark1 lg:h-96 h-52 flex items-center '>
                <h1 className='text-6xl lg:pl-36 lg:w-1/2  animate-slideUp m-auto lg:m-0'>PORTFOLIO</h1>
            </div>
            <p className='bg-orange-400 h-0.5 w-full'></p>
            <section className='lg:mx-36'>
                <center><h1 className='text-4xl m-10'>MY WORKS</h1></center>
                <center><h1 className='text-2xl m-10 text-orange-600'>Web Designs</h1></center>

                <div className='lg:grid grid-cols-3 gap-4 m-5'>
                    <div className='dark:bg-fdark1 h-60 shadow shadow-gray-600 p-5  flex flex-col items-center justify-center my-5'>
                        <h1>LEARNING MANAGEMENT SYSTEM</h1>
                        <h1>Technologies Used</h1>
                        <ul className='flex space-x-2'>
                            <li>Nextjs</li>
                            <li>Taiwind Css</li>
                            <li>MongoDB</li>
                        </ul>
                        <h1>Project Link</h1>
                        <h1>Github Link</h1>
                    </div>
                    <div className='dark:bg-fdark1 h-60 shadow shadow-gray-600 p-5  flex flex-col items-center justify-center my-5'>
                        MY PORTFOLIO WEB
                        <h1>Technologies Used</h1>
                        <h1>Project Link</h1>
                        <h1>Github Link</h1>
                    </div>
                    <div className='dark:bg-fdark1 h-60 shadow shadow-gray-600 p-5  flex flex-col items-center justify-center my-5'>
                        <h1>Technologies Used</h1>
                        <h1>Project Link</h1>
                        <h1>Github Link</h1>
                    </div>
                    <div className='dark:bg-fdark1 h-60 shadow shadow-gray-600 p-5  flex flex-col items-center justify-center my-5'>
                        <h1>Technologies Used</h1>
                        <h1>Project Link</h1>
                        <h1>Github Link</h1>
                    </div> 
                    <div className='dark:bg-fdark1 h-60 shadow shadow-gray-600 p-5  flex flex-col items-center justify-center my-5'>
                        <h1>Technologies Used</h1>
                        <h1>Project Link</h1>
                        <h1>Github Link</h1>
                    </div>
                    <div className='dark:bg-fdark1 h-60 shadow shadow-gray-600 p-5  flex flex-col items-center justify-center my-5'>
                        <h1>Technologies Used</h1>
                        <h1>Project Link</h1>
                        <h1>Github Link</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page