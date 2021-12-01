import '../styles/styles.css'
import Layout from 'components/Layout/Layout'
import { DashboardProvider } from 'components/context/context'

import { Provider } from "next-auth/client"

import {QueryClient, QueryClientProvider} from 'react-query'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const queryclient = new QueryClient()

export default function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <QueryClientProvider client={queryclient}>
        <DashboardProvider>
          <Provider session={pageProps.session}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </DashboardProvider>
      </QueryClientProvider>
    </>
  );
}
