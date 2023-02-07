import Image from 'next/image'
import React from 'react'

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
     <Image src={'https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/132873831_1201915090227226_681900373770315192_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFwdPwC5zfJhrB-C_be_allA_MoA-VepBAD8ygD5V6kEHaI63pi1BCSOzBmJpRwMHwPe7-UVvuaJ5DNh_C2GW8M&_nc_ohc=MI-3pTnmHzAAX-2ZrQ_&_nc_ht=scontent.flos1-2.fna&oh=00_AfAxUElJoMD0HpMpf2_1YSDoXabu3KQUZW-FWsRqirlyxA&oe=63F3DF10'} alt='User-Image'
            width={200}
            height={200}
            className='h-16 w-16 rounded-full border p-[2px] object-cover'
    />
    <div className="flex-1 ml-4">
        <h2 className="font-bold">wadej</h2>
        <h3 className='text-sm text-gray-400'>Welcome to instagram</h3>
    </div>
    <button className='font-semibold text-blue-400 text-sm'>Sign out</button>
    </div>
  )
}

export default MiniProfile
