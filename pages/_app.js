import '../styles/styles.css'
import Layout from '../components/global/layout'
import { DashboardProvider } from 'components/context/context'

import { Provider } from "next-auth/client"

import {useState, useEffect} from "react";

import { useRouter } from "next/router";

import {QueryClient, QueryClientProvider} from 'react-query'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const queryclient = new QueryClient()

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // useEffect will be triggered just once at component initialization
  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      setLoading(true)
    });
    router.events.on("routeChangeComplete", (url) => {
      setLoading(false)
    });
  }, []);
  
  return (
    <>
      <QueryClientProvider client={queryclient}>
        <DashboardProvider>
          <Provider session={pageProps.session}>
            {loading && <Layout />}
            <Component {...pageProps} />
          </Provider>
        </DashboardProvider>
      </QueryClientProvider>
    </>
  );
}
