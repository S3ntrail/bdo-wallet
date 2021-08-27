import MarketOverview from 'components/market/marketOverview'

import HeadWebsite from 'components/global/head'
import Navbar from 'components/global/navbar'
import Footer from 'components/global/footer'
import Layout from 'components/global/layout'

export default function Home() {
  return (
    <Layout>

      <div className="flex flex-col h-screen justify-between">
        <div>
          <HeadWebsite />
        </div>

        <nav>
          <Navbar />
        </nav>

        <main className="flex-grow mb-auto dark:bg-gray-800">
          <section>
            <MarketOverview />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>

      </div>

    </Layout>

  )
}
