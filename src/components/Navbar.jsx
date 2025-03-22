import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <>
        <div className='flex justify-between items-center p-4'>
        <h1 className='text-4xl font-bold'>Routes</h1>
        <ul className='flex items-center  gap-10 text-xl' >
            <Link className='hover:text-blue-500' to='/'>Home</Link>
            <Link className='hover:text-blue-500' to='/about'>About</Link>
            <Link className='hover:text-blue-500' to='/product'>Product</Link>
            <Link className='hover:text-blue-500' to='/contact'>Contact</Link>
        </ul>
        </div>
        </>
    </div>
  )
}

export default Navbar