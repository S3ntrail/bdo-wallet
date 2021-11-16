import Balance from 'components/dashboard/balance'
import Chart from 'components/dashboard/chart'
import Transaction from 'components/form/transaction'

import HeadWebsite from 'components/global/head'
import Navbar from 'components/global/navbar'
import Footer from 'components/global/footer'

import { useEffect, useContext } from 'react'
import { useSession, signIn } from 'next-auth/client'

import { useRouter } from 'next/router'
import { DashboardContext } from 'components/context/context'

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

        <main className="flex flex-col justify-center w-full flex-1 text-center bg-gray-750">

          <div>
            <Navbar />
          </div>

          <section className="flex flex-col bg-black w-full h-screen">
            <div>
              <Chart />
            </div>

          </section>
        </main>

        <div className="flex flex-col justify-center w-full flex-1 text-center">
          <Footer />
        </div>

      </div>
    </>
  )
}
