import React, { useState } from 'react'

const App = () => {
  
  const [num, setNum] = useState(0)

  return (
    <div>
      <p>{num}</p>
      <button
      className='bg-green-500 text-white p-2 rounded-md'
       onClick={() => setNum(num + 1)}>add</button>
      <button
      className='bg-red-500 text-white p-2 rounded-md'
       onClick={() => setNum(num - 1)}>sub</button>
    </div>
  )
}

export default App