import Login from 'components/form/login'

import HeadWebsite from 'components/global/head'
import Navbar from 'components/global/navbar'
import Footer from 'components/global/footer'

// export const getServerSideProps = async(req, res) => {

//   const session = res.session

//   if(session) {
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
    <>

      <div className="flex flex-col h-screen justify-between">
        <div>
          <HeadWebsite />
        </div>

        <nav>
          <Navbar />
        </nav>

        <main className="flex-grow mb-auto dark:bg-gray-800">
          <section>
            <Login />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>

      </div>

    </>

  )
}
