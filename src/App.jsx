import React from 'react'
import BackGround from './components/BackGround';
import ForeGround from './ForeGround';

const App = () => {
  return (
    <div>
      <div className=' relative w-full h-screen bg-zinc-800'>
     <BackGround/>
     <ForeGround/>
     

      
      </div>
    </div>
  )
}

export default App;