import '../styles/globals.css'
import Layout from '../components/global/layout'

import { Provider } from "next-auth/client"

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <Provider session={pageProps.session}>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }

import {useState, useEffect} from "react";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => { //<-- this useEffect will be triggered just one time at component initialization
      router.events.on("routeChangeStart", (url) => {
         console.log("Route is changing");
         setLoading(true)
      });
      router.events.on("routeChangeComplete", (url) => {
         console.log("Route is changed");
         setLoading(false)
      });
  }, []);
  
  return (
    <>
    {loading && <Layout />}
    <Provider session={pageProps.session}>
      <Component {...pageProps} />;
    </Provider>
    </>
  );
}
