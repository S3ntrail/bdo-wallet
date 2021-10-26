import '../styles/globals.css'
import Layout from '../components/global/layout'

import { Provider } from "next-auth/client"

import {useState, useEffect} from "react";

import { useRouter } from "next/router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

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
      {loading && <Layout />}
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
