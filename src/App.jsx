
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



