import Image from 'next/image'
import Header from '../components/Header'
import Head from 'next/head'
import Feed from '@/components/Feed'

  

export default function Home() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <Head>
        <title>Instagram Clone App</title>
        <meta name="description" content="copied by Joshua" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>    

       {/*Feed Sextion  */}
       <Feed/>


       {/* Stories Section here */}
    </div>
  )
}
