import Balance from 'components/dashboard/balance'
// import Chart from '@/components/dashboard/chart'

import HeadWebsite from 'components/global/head'
import Navbar from 'components/global/navbar'
import Footer from 'components/global/footer'

export default function Home() {
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

            {/* <Chart /> */}
          </section>
        </main>

        <div className="flex flex-col justify-center w-full flex-1 text-center">
          <Footer />
        </div>

      </div>
    </>
  )
}
