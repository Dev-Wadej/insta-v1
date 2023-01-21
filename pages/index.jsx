import Image from 'next/image'
import Header from '../components/Header'
import Head from 'next/head'

  

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram Clone App</title>
        <meta name="description" content="copied by Joshua" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>     
    </>
  )
}
