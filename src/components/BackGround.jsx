import React from 'react'

const BackGround = () => {
  return (
    <>
      <div className=' fixed z-[2] w-full h-screen'>
        <div className='flex justify-center text-xl font-semibold py-10 text-fuchsia-100 absolute top-[5%] w-full'>
          Document
        </div>

        <h1 className=' absolute text-zink  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  font-semibold text-[13vw] leading-none tracking-tighter text-zinc-900'>
          docs
        </h1>
      </div>
    </>
  )
}

export default BackGround
