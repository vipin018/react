
// STATE MANAGEMENT (useState)

// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)

//   return (
//     <div>
//       <p>{num}</p>
//       <button
//       className='bg-green-500 text-white p-2 rounded-md'
//        onClick={() => setNum(num + 1)}>add</button>
//       <button
//       className='bg-red-500 text-white p-2 rounded-md'
//        onClick={() => setNum(num - 1)}>sub</button>
//     </div>
//   )
// }

// export default App



// FORM HANDLING
/*
import React from 'react'



const App = () => {

  const handleSubmit = (e) => {
   e.preventDefault()
  }

  return (
    <div>
      <form 
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center h-screen'>
        <input className='border-2 border-gray-300 rounded-md p-2'
          type="text" placeholder='name' />
        <input className='border-2 border-gray-300 rounded-md p-2'
          type="email" placeholder='email' />
        <input className='border-2 border-gray-300 rounded-md p-2'
          type="password" placeholder='password' />
        <button className='bg-green-500 text-white p-2 m-2 rounded-lg '
        type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App
*/

// TWO WAY DATA BINDING

/* 

import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsername('')
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}
        className='flex flex-col items-center justify-center h-screen'>
        <input
          value={username}
          className='border-2 border-gray-300 rounded-md p-2'
          type="text"
          onChange={(e) => {
           setUsername(e.target.value)
          }}

          placeholder='name' />
        <input
          className='border-2 border-gray-300 rounded-md p-2'
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder='email' />
        <input
          className='border-2 border-gray-300 rounded-md p-2'
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          placeholder='password' />
        <button
          className='bg-green-500 text-white p-2 m-2 rounded-lg '
          type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App

*/

// COMPONENT
/*
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
*/

// PROPS
/*

import React from 'react'
import Card from './components/Card'
const App = () => {

  const users = [
   
      {
        "name": "Amit Sharma",
        "city": "Mumbai",
        "age": 28,
        "profile_picture": "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "job_profile": "Software Engineer"
      },
      {
        "name": "Priya Verma",
        "city": "Delhi",
        "age": 25,
        "profile_picture": "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "job_profile": "Data Analyst"
      },
      {
        "name": "Rahul Singh",
        "city": "Bangalore",
        "age": 30,
        "profile_picture": "https://images.unsplash.com/photo-1576558656222-ba66febe3dec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "job_profile": "Product Manager"
      },
      {
        "name": "Aman Patel",
        "city": "Ahmedabad",
        "age": 22,
        "profile_picture": "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "job_profile": "Graphic Designer"
      },
      {
        "name": "Vikram Khanna",
        "city": "Pune",
        "age": 35,
        "profile_picture": "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "job_profile": "DevOps Engineer"
      }
    ]



  return (
    <div className='p-10'>
    {users.map(function(user){
      return <Card username={user.name} city={user.city} age={user.age} profile_picture={user.profile_picture} job_profile={user.job_profile} />
    })}
    </div>
  )
}

export default App

*/

// API CALLING

/*

import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

const getData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  setData(response.data)
  
}

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <button className='bg-red-500 text-white px-2 py-3 m-10 rounded text-4xl font-semibold animate-bounce '
     onClick={getData}
     >Get Data</button>
      <div className='bg-gray-100  flex flex-wrap justify-evenly gap-4 rounded-lg'>
        {data.map((user) => (
          <div key={user.id} className='border-2 border-gray-300 p-4 rounded-lg'>
            <h1>username: {user.name}</h1>
            <p>email: {user.email}</p>
            <p>city: {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

*/

// REACT ROUTER DOM

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App