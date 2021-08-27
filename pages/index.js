import Hero from 'components/landing/hero'
import Cause from 'components/landing/cause'

import HeadWebsite from 'components/global/head'
import Navbar from 'components/global/navbar'
import Footer from 'components/global/footer'
import Layout from 'components/global/layout'

// export const getServerSideProps = async() => {

//   const res = await fetch('/api/login', {

//   })

//   if(false) {
//     return {
//       props: {},
//       redirect: {
//         destination: "/dashboard"
//       }
//     }
//   }
//   return {
//     props: {},
//   }
// }

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

          {/* <section className="h-screen flex">
            <Cause />
          </section>

          <section className="h-screen flex">
            
          </section> */}
        </main>

        <footer>
          <Footer />
        </footer>

      </div>

    </Layout>

  )
}
