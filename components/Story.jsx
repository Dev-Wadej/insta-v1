import Image from 'next/image'
import React from 'react'
import { PlusIcon } from '@heroicons/react/solid'

function  Story({image,username,isUser}) {
  return (
    <div className='relative group cursor-pointer'>
        <Image className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 group-hover:scale-110 transition-all duration-200 ease-out' src={image} width={200} height={200} alt={`${username}'s Icon`}/>
        {isUser && <PlusIcon className='h-6 absolute top-4 left-4 text-white '/>}

        <p className='text-xs w-14 truncate'>{username}</p>
        {/* <img src={img} alt="" height={30} width={30} /> */}
    </div>
  )
}

export default Story
