import Login from 'components/form/login'

import HeadWebsite from 'components/global/head'
import Navbar from 'components/global/navbar'
import Footer from 'components/global/footer'

import {useEffect} from 'react'

import { useRouter } from 'next/router'


// export const getServerSideProps = async(req, res) => {

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

  const router = useRouter()

  useEffect( () => {
    setTimeout( () => {
      router.push('/404')
    }, 0)
  }, [])

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
