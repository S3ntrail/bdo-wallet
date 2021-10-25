import { useRouter } from 'next/router'

import Error from 'components/global/error'

import HeadWebsite from 'components/global/head'
import Navbar from 'components/global/navbar'
import Footer from 'components/global/footer'

import { useEffect } from 'react'

export default function Home() {

  const router = useRouter()

  useEffect( () => {
    setTimeout( () => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <>

      <HeadWebsite />

      <div className="flex flex-col items-center justify-center">

        <main className="flex flex-col justify-center w-full flex-1 text-center">
          <div>
            <Navbar />
          </div>

          <section>
            <Error />
          </section>

        </main>

        <div className="flex flex-col justify-center w-full flex-1 text-center">
          <Footer />
        </div>

      </div>

  </>

  )
}
