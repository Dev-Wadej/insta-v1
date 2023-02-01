import Image from 'next/image'
import React from 'react'

function Story({image,username}) {
  return (
    <div>
        <Image className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-all duration-200 ease-out' src={image} width={200} height={200} alt={`${username}'s Icon`}/>

        <p className='text-xs w-14 truncate'>{username}</p>
        {/* <img src={img} alt="" height={30} width={30} /> */}
    </div>
  )
}

export default Story
