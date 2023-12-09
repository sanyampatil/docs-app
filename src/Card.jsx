import React from 'react'
import { FaFileAlt } from 'react-icons/fa'
import { IoMdCloudDownload } from "react-icons/io";
const Card = () => {
  return (
    <div className='w-60 h-72 py-10 px-7 bg-zinc-900 text-white rounded-[20px] relative overflow-hidden  '>
      <FaFileAlt />
      <p className='leading-none font-semibold text-sm mt-5'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
        placeat?
      </p>
      <div className=' footer absolute bottom-20  h-10 py-3 w-full left-0 '>
        <div className='flex  items- justify-between   px-6 '>

        <h5>5mb</h5>
        <IoMdCloudDownload size="2em"/>
        </div>
        <div className='w-full h-20 bg-sky-200'></div>
      </div>

    </div>
  )
}

export default Card
