import minifaker from 'minifaker'
import { useEffect, useState } from 'react'
import 'minifaker/locales/en'
import Story from './Story'

export default function Stories() {
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
    <div>
      {storyUsers.map(user=>(
          <Story key={user.id} username={user.username} image={user.img}  />
      ))}
    </div>
  )
}
