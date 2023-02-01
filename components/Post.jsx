import Image from 'next/image'
import React from 'react'
import { DotsHorizontalIcon } from '@heroicons/react/outline'

function Post({id,caption,img,userImg,username}) {
  return (
    <div className='bg-white my-7 border rounded-md '>
      {/* Post Header */}
        <div className="flex items-center p-5">
            <Image className='h-12 w-12 rounded-full object-cover border p-1 mr-3' src={userImg} alt={`${username}'s img`} width={800} height={500}/>
            <p className='font-bold flex-1'>{username}</p>
            <DotsHorizontalIcon className='h-5 cursor-pointer' />

        </div>

        {/* Post Image */}
        <Image className='object-cover w-full' src={img} alt='User post' width={700} height={700}/>
    </div>
  )
}

export default Post
