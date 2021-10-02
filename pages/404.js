import Error from 'components/global/error'

import HeadWebsite from 'components/global/head'
import Navbar from 'components/global/navbar'
import Footer from 'components/global/footer'
import Layout from 'components/global/layout'

export default function Home() {
  return (
    <Layout>

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

  </Layout>

  )
}
