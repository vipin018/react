import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className='card bg-gray-300 text-black p-6 inline-block text-center m-4 rounded-lg'>
       <img className=' ml-5 w-32 h-32 rounded-full mb-3 object-cover' src={props.profile_picture} alt="" />
        <h1 className='text-2xl font-semibold mb-4'> {props.username} {props.age}</h1>
        <h2 className='text-lg mb-4'>{props.city}</h2>
        <h3 className='text-sm mb-4'>{props.job_profile}</h3>
        <button className='bg-green-500 text-white p-2 rounded-md'>Add Friend</button>
    </div>
  )
}

export default Card