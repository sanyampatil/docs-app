import React, { useRef, useState } from 'react'

import Card from './Card'


function ForeGround () {
  const ref = useRef(null);


  const data=[
    {
       desc:"this a ungdo ihddhd jidid  hdh sa loreee  uduh ",
      filesize:".9mb",
      close:true,
      tag:{isOPen:true,TagTitle:"download now ",tagColor:"green"},
    },    

    {
      desc:"this a ungdo ihddhd jidid  hdh sa loreee  uduh ",
     filesize:".9mb",
     close:true,
     tag:{isOPen:true,TagTitle:"sign up ",tagColor:"green"},
   },

   {
    desc:"this a ungdo ihddhd jidid  hdh sa loreee  uduh ",
   filesize:".9mb",
   close:true,
   tag:{isOPen:true,TagTitle:"log in ",tagColor:"blue"},
 }
    
  ]
    
  
  return (
   <div ref={ref} className='w-full h-full fixed top-0 left-0 z-[3] flex gap-10 flex-wrap p-5'>
   {data.map((item,index)=>(
    <Card data={item} reference={ref}/>
   ))}
   

   </div>

  )
}

export default ForeGround