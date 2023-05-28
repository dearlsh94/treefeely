import type { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RecoilRoot } from 'recoil'
import RecoilDebugObserver from '@/components/RecoilDebugObserver'
import '@/styles/index.scss'
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: 'treefeely-e2aaf.firebaseapp.com',
    databaseURL: 'https://treefeely-e2aaf-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'treefeely-e2aaf',
    storageBucket: 'treefeely-e2aaf.appspot.com',
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: '1:317346309374:web:f385cc225bf6636d47b1af',
    measurementId: 'G-YK9YNZ05GD',
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  // const analytics = getAnalytics(app)

  return (
    <>
      <RecoilRoot>
        <RecoilDebugObserver />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=NO" />
          </Head>
          <Component {...pageProps} />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  )
}

export default App
