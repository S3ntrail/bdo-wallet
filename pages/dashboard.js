import Balance from 'components/dashboard/balance'
import PieChart from 'components/dashboard/chart'
import Transaction from 'components/form/transaction'

import HeadWebsite from 'components/global/head'
import Navbar from 'components/global/navbar'
import Footer from 'components/global/footer'

import { useEffect } from 'react'
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

        <main className="flex flex-col justify-center w-full flex-1 text-center bg-gray-750">

          <div>
            <Navbar />
          </div>

          <section>
            <Balance 
            />
          </section>

          <section className="flex bg-black w-full">
            <div className="inline-block">
              <PieChart />
            </div>

            <div className="inline-block">
              <Transaction />
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
