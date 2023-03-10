import { useSession,signOut } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

function MiniProfile() {

  const {data:session}=useSession()
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
     <Image src={session?.user.image} alt='User-Image'
            width={200}
            height={200}
            className='h-16 w-16 rounded-full border p-[2px] object-cover'
    />
    <div className="flex-1 ml-4">
        <h2 className="font-bold">{session?.user.username}</h2>
        <h3 className='text-sm text-gray-400'>Welcome to instagram</h3>
    </div>
    <button onClick={signOut} className='font-semibold text-blue-400 text-sm'>Sign out</button>
    </div>
  )
}

export default MiniProfile
