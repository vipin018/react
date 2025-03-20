import React from 'react'

const Navbar = () => {
  return (
    <div>
        <>
        <div className='flex bg-gray-100 justify-between items-center p-4'>
        <h1 className='text-4xl font-bold'>LOGO</h1>
        <ul className='flex items-center  gap-10 text-xl' >
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Login</button>
        </ul>
        </div>
        </>
    </div>
  )
}

export default Navbar