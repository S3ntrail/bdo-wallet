import Balance from 'components/dashboard/balance'
import PieChart from 'components/dashboard/chart'
import Transaction from 'components/form/transaction'

import HeadWebsite from 'components/global/head'
import Navbar from 'components/global/navbar'
import Footer from 'components/global/footer'

export default function Home() {

  return (
    <>
      <HeadWebsite />

      <div className>

        <main className="bg-gray-750">

          <section className="flex bg-black w-full">
            <div className="inline-block">
              <PieChart />
            </div>

          </section>
        </main>


      </div>
    </>
  )
}
