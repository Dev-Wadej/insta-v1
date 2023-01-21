import Image from 'next/image'
import React from 'react'
import { SearchIcon,PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon  } from '@heroicons/react/solid'

function Header() {
  return (
    <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
      {/* Left */}
            <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                <Image src="http://www.pngitem.com/pimgs/m/132-1327993_instagram-logo-word-png-transparent-png.png" alt='Instagrams logo'
                layout='fill'
                className='object-contain'
                />
            </div>  
            
             <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt='Instagrams logo'
                layout='fill'
                className='object-contain'
                />
            </div>

      {/* Middle */}
      <div className='relative mt-1'>
          <div className='absolute top-2 left-2'>
              <SearchIcon className='h-5 text-gray-500 ' />
          </div>
              <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md' />
      </div>


      {/* Right */}
      <div className="flex space-x-4 items-center">
          <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
          <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>

            <Image src={'https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/132873831_1201915090227226_681900373770315192_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFwdPwC5zfJhrB-C_be_allA_MoA-VepBAD8ygD5V6kEHaI63pi1BCSOzBmJpRwMHwPe7-UVvuaJ5DNh_C2GW8M&_nc_ohc=MI-3pTnmHzAAX-2ZrQ_&_nc_ht=scontent.flos1-2.fna&oh=00_AfAxUElJoMD0HpMpf2_1YSDoXabu3KQUZW-FWsRqirlyxA&oe=63F3DF10'} alt='User-Image'
            width={40}
            height={40}
            className='h-10 rounded-full cursor-pointer' />
      </div>
    </div>
  )
}

export default Header
