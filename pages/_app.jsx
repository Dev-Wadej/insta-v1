import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot  } from 'recoil'

export default function App({ Component, pageProps:{session,...pageProps}}) {
    // console.log(session)
    return ( 
    <SessionProvider session={session} >
        <RecoilRoot>
          <Component {...pageProps }/>
        </RecoilRoot>
    </SessionProvider>
    )
}