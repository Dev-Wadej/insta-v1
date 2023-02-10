import React, { useEffect, useState } from 'react'
import Post from './Post'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase.config';

function Posts() {
const [posts,setPosts]=useState([])

useEffect(() => {
  const unSubscribe = onSnapshot(
    collection(db,'posts'),orderBy("timestamp","desc"),
    (snapshot)=>{
      setPosts(snapshot.docs)
    })
    return unSubscribe
},[]);
  return (
    <div>
      {posts.map((post)=>(
          <Post 
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
          />
      ))}
    </div>
  )
}

export default Posts
 