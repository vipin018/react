import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='flex justify-between items-center '>
       <div className=' left w-1/2 mt-10'>
      <img className='w-full h-full rounded-xl object-cover'
       src="https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       </div>
       <div className=' right  w-1/2 flex flex-col justify-center items-center gap-10 '>
        <h1 className='text-5xl font-bold'>Welcome to our website</h1>
        <p className=' text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <button className='mt-4  bg-blue-500 text-white px-4 py-2 rounded-md'>Know More</button>
       </div>
    </div>
    </>
  )
}

export default Hero