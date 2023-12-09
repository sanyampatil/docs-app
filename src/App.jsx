import React from 'react'
import BackGround from './components/BackGround';

const App = () => {
  return (
    <div>
      <div className=' relative w-full h-screen bg-zinc-800'>
     <BackGround/>
     <div className='w-full h-full fixed top-0 left-0 z-[3]'></div>
      
      </div>
    </div>
  )
}

export default App;