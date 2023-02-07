import {getProviders,signIn} from 'next-auth/react'
import Header from '@/components/Header';
import Image from 'next/image';


export default function signin({providers}) {
    console.log(providers )
    const handleSignin=()=>{
        signIn(providers.id,{callbackUrl:"/"})
    }
  return (
    <>
        <Header />
        <div className="flex justify-center space-x-7 mt-20 items-center">
            <Image className='hidden object-cover rotate-6 md:inline-flex md:w-[35rem]' src='https://cdn-hfccj.nitrocdn.com/ZcdvpPrOuqiIRmmNafzktyViRdxlsNrE/assets/images/optimized/rev-2aeed87/wp-content/uploads/2021/08/PngItem_2998371.png' width={500} height={500} alt='Instagrams Signin Page' />
            <div className="">
                {Object.values(providers).map((provider,id)=>(
                    <div className=" flex flex-col items-center" key={id}>
                        <Image className='w-[18rem] object-cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-LRhFTez8Fmrlmkwr0bOUIO1yShRSnubxg&usqp=CAU' alt='IG' width={500} height={200}/>
                        <p className='text-sm italic my-10 text-center'>This app is created by Wade 💚 & 💡</p>
                        <button onClick={handleSignin} className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'>Sign in with {provider.name}</button>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export async function getServerSideProps(context){
    const providers = await getProviders();
    return{props:{providers}}
}
