import React from 'react'
import { FaFileAlt } from 'react-icons/fa'
import { IoMdCloudDownload } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";  
import { motion } from "framer-motion"  

const Card = ({data,reference}) => {

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}}  dragElastic={.1} className='w-60 h-72 py-10 px-7 flex-shrink-0 bg-zinc-900 text-white rounded-[20px] relative overflow-hidden  '>
      <FaFileAlt />
      <p className='leading-none font-semibold text-sm mt-5'>
       {data.desc}
      </p>
      <div className=' footer absolute bottom-20  h-10 py-3 w-full left-0 '>
        <div className='flex  items- justify-between  pb-5  px-6 '>

        <h5>{data.filesize}</h5>
        {data.close ? <IoCloseCircleOutline size="2em " />:  <IoMdCloudDownload size="2em"/>}
      
        </div>
        {data.tag.isOPen?(
        <div className='w-full h-20 bg-green-700'>
          <h3 className='flex justify-center items-center py-4 font-bold text-md'>{data.tag.TagTitle}</h3>
        </div>

        ):null}
      </div>

    </motion.div>
  )
}

export default Card
