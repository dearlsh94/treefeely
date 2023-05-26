import type { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RecoilRoot } from 'recoil'
import RecoilDebugObserver from '@/components/RecoilDebugObserver'
import '@/styles/index.scss'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const App = ({ Component, pageProps }: AppProps) => {
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
