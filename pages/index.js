import HeadWebsite from 'components/global/head'
import Navbar from 'components/global/navbar'
import Footer from 'components/global/footer'
import Layout from 'components/global/layout'

import Landing from 'components/Landing/Landing'

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

      <div className="flex flex-col items-center justify-center">
        <HeadWebsite />

        <main className="flex flex-col justify-center w-full flex-1 text-center">
          <div>
            <Navbar />
          </div>

          <section>
            <Landing />
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
