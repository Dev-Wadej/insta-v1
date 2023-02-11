/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { DotsHorizontalIcon,HeartIcon,ChatIcon,BookmarkIcon,EmojiHappyIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import Moment from 'react-moment'

function Post({id,caption,img,userImg,username}) {
  const{data:session}= useSession()
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  // console.log(comments) 

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db,"posts",id, "comments"),orderBy("timestamp","desc"),
      (snapshot)=>{
        setComments(snapshot.docs)
      }
    )
      return unSubscribe
  }, [db,id]);

  useEffect(()=>{
    const unSubscribe = onSnapshot(
      collection(db,"posts",id, "likes"),(snapshot)=>{
        setLikes(snapshot.docs)
      }
    )
  },[id,db])

  useEffect(()=>{
    setHasLiked(
      likes.findIndex(like=>like.id===session?.user.uid) !== -1
    )
  },[likes, session.user.uid])

  const likePost=async()=>{
    if(hasLiked){
      await deleteDoc(doc(db,"posts",id,"likes",session.user.uid),{
        username: session.user.username
      })

    }
    else{
      await setDoc(doc(db,"posts",id,"likes",session.user.uid),{
        username: session.user.username
      })
    }

  }
  async function sendComment(e) {
    e.preventDefault()
    const commentToSend = comment;
    setComment("")

    await addDoc(collection(db, "posts",id,"comments"),{
      comment:commentToSend,
      username:session.user.username,
      userImage: session.user.image,
      timeStamp: serverTimestamp(),
    });
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
                {
                  hasLiked ? (
                    <HeartIconFilled onClick={likePost} className="text-red-400 btn hover:scale-125" />
                    ) : (
                    <HeartIcon onClick={likePost} className="btn hover:scale-125" />
                  )
                }
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
        {comments?.length > 0 && (
          <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
            {comments?.map(comment=>(
              <div className="flex items-center space-x-2 mb-2" key={comment.id}>
                <Image className='h-7 w-7 rounded-full object-cover' src={comment.data().userImage} height={50} width={50} alt='user-image'/>
                <p className='font-semibold'>{comment.data().username}</p>
                <p className='flex-1 truncate'>{comment.data().comment}</p>
                <Moment fromNow>{comment.data().timeStamp?.toDate()}</Moment>
              </div>
            ))}
          </div>
        )}

        {/* Post Input Box */}
        {
          session && (
        <form className="flex items-center p-4">
            <EmojiHappyIcon  className='h-7 cursor-pointer'/>
            <input 
            className='border-none flex-1 focus:ring-0'
            type="text" 
            placeholder='Enter your comment ...'
            value={comment}
            onChange={(e)=> setComment(e.target.value)}
            />

            <button type='submit' onClick={sendComment} disabled={!comment.trim()} className='text-blue-400 font-bold disabled:text-blue-200'>Post</button>
        </form>
          )
        }

    </div>
  )
}

export default Post
