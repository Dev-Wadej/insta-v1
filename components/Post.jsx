import Image from 'next/image'
import React, { useState } from 'react'
import { DotsHorizontalIcon,HeartIcon,ChatIcon,BookmarkIcon,EmojiHappyIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'

function Post({id,caption,img,userImg,username}) {
  const{data:session}= useSession()
  const [comments, setComments] = useState("");

  async function sendComment(e) {
    e.preventDefault()
    const commentToSend = comments;
    setComments("")

    await addDoc(collection(db, "posts",id,"comments"),{
      comment:commentToSend,
      username:session.user.username,
      userImage: session.user.image,
      timeStamp: serverTimestamp(),
    })
  }

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

        {/* Post Buttons */}
        {session && (
        <div className="flex justify-between px-4 pt-4">
            <div className='flex space-x-4'>
                <HeartIcon className="btn hover:scale-125" />
                <ChatIcon className="btn hover:scale-125" />
            </div>
                <BookmarkIcon className="btn hover:scale-125" />
        </div>
        )}

        {/* Post comments */}
        <p className='p-5 truncate'>
            <span className='font-bold mr-2'>{username}</span>
            {caption}
        </p>

        {/* Post Input Box */}
        {
          session && (
        <form className="flex items-center p-4">
            <EmojiHappyIcon  className='h-7 cursor-pointer'/>
            <input 
            className='border-none flex-1 focus:ring-0'
            type="text" 
            placeholder='Enter your comment ...'
            value={comments}
            onChange={(e)=> setComments(e.target.value)}
            />

            <button type='submit' onClick={sendComment} disabled={!comments.trim()} className='text-blue-400 font-bold disabled:text-blue-200'>Post</button>
        </form>
          )
        }

    </div>
  )
}

export default Post
