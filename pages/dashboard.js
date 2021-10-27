import Balance from 'components/dashboard/balance'
// import Chart from '@/components/dashboard/chart'
import Transaction from 'components/form/transaction'

import HeadWebsite from 'components/global/head'
import Navbar from 'components/global/navbar'
import Footer from 'components/global/footer'

import { useState, useEffect } from 'react'
import { useSession, signIn } from 'next-auth/client'

import { useRouter } from 'next/router'

export default function Home() {

  const [session, loading] = useSession()
  const router = useRouter()

  if(!session) {
    useEffect( () => {
      setTimeout( () => {
        router.push( signIn())
      }, 0)
    }, [])
  }

  return (
    <>
      <HeadWebsite />

      <div className="flex flex-col items-center justify-center">

        <main className="flex flex-col justify-center w-full flex-1 text-center">

          <div>
            <Navbar />
          </div>

          <section>
            <Balance />
          </section>

          <section>
            {/* <Chart /> */}
          </section>

          <section>
            <Transaction />
          </section>
        </main>

        <div className="flex flex-col justify-center w-full flex-1 text-center">
          <Footer />
        </div>

      </div>
    </>
  )
}
