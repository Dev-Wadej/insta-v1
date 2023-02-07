import minifaker from 'minifaker'
import { useEffect, useState } from 'react'
import 'minifaker/locales/en'
import Story from './Story'
import { useSession } from 'next-auth/react'

export default function Stories() {
  const {data:session}=useSession()
    const [storyUsers,setStoryUsers]=useState([])

    useEffect(()=>{
        const stories=minifaker.array(20,(i)=>(
            {
                username:minifaker.username({locale:'en'}).toLowerCase(),
                img:`https://i.pravatar.cc/150?img=${Math.floor(Math.random()*70)+1}`,
                id:i
            }
            )
         )
         console.log(stories)
         setStoryUsers(stories)
    },[])
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none'>
      {session && (
        <Story image={session?.user.image} username={session?.user.username} isUser={true}/>
      )}
      {storyUsers.map(user=>(
          <Story key={user.id} username={user.username} image={user.img}  />
      ))}
    </div>
  )
}
