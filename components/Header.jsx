import Image from 'next/image'
import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <div className='flex items-center justify-between max-w-6xl'>
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
    </div>
  )
}

export default Header
