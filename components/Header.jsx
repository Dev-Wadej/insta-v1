import Image from 'next/image'
import React from 'react'
import { SearchIcon,PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon  } from '@heroicons/react/solid'
import { useSession,signOut,signIn } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import { modalState } from '@/atom/modalAtom'
import { useRouter } from 'next/router'


function Header() {

  const router = useRouter()
  const[open,setOpen]=useRecoilState(modalState)
  const {data:session}= useSession()
  console.log(session)
  return (
      <div className="shadow-sm border-b sticky top-0 bg-white z-30 ">
    <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
      {/* Left */}

            <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                <Image src="http://www.pngitem.com/pimgs/m/132-1327993_instagram-logo-word-png-transparent-png.png" alt='Instagrams logo'
                layout='fill'
                className='object-contain'
                onClick={()=>router.push('/ ')}
                />
            </div>  
            
             <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt='Instagrams logo'
                layout='fill'
                className='object-contain'
                onClick={()=>router.push('/ ')}
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
          <HomeIcon  onClick={()=>router.push('/ ')} className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
          {
            session ?
         (   <>
          <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' onClick={()=>setOpen(true)}/>

            <Image src={session.user.image} alt='User-Image'
            width={40}
            height={40}
            onClick={signOut}
            className='h-10 rounded-full cursor-pointer' />
          </>): (
            <>
            <button onClick={signIn}>Sign In</button>
            </>
          )

          }
      </div>
    </div>
    </div>
    )
}

export default Header
