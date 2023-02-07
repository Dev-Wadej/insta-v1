import minifaker, { jobTitle } from 'minifaker'
import Image from 'next/image'
import { useEffect, useState } from 'react'
const Suggestions = () => {

    const [suggestions,setSuggestions]= useState([])

    useEffect(()=>{
        const suggestionsFaked=minifaker.array(5,i=>({
            username: minifaker.username({locale:'en'}).toLowerCase(),
            jobTitle: minifaker.jobTitle(),
            id:i
        }))
        setSuggestions(suggestionsFaked)
    },[])
  return (
    <div className='mt-4 ml-10'>
      <div className="flex justify-between mb-5 text-sm">
          <h3 className='font-bold text-gray-400'>Suggestion for you</h3>
          <button className='text-gray-600 font-semibold'>See All</button>
      </div>
      {suggestions.map(suggestion =>(
          <div key={suggestion.id} className="flex items-center justify-between mt-3 ">
                <Image className='h-10 w-10 rounded-full border p-[2px]' src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random()*70)+1}`} alt={suggestion.username}  width={50} height={50}/>
                <div className="flex-1 ml-4">
                    <h2 className='font-semibold text-sm'>{suggestion.username}</h2>
                    <h3 className='text-sm font-bold text-gray-400 truncate w-[210px]'>{suggestion.jobTitle}</h3>
                </div>
                <button className='font-semibold text-blue-400 text-sm'>Follow</button>
          </div>
      ))}
    </div>
  )
}

export default Suggestions
