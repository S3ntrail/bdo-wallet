import Hero from 'components/landing/hero'

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

        <main className="flex-grow dark:bg-gray-800">
          <section className="h-screen flex">
            <Hero />
          </section>

          <section className="h-screen flex">
            <h1>Test</h1>
          </section>

          <section className="h-screen flex">
            <h1>Test</h1>
          </section>
        </main>

        <footer>
          <Footer />
        </footer>

      </div>

    </Layout>

  )
}
