import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import AOS from 'aos'
import '@/styles/index.scss'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { GA_TRACKING_ID } from '@/constants'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out',
      offset: 15,
      once: false,
    })
  }, [])

  return (
    <>
      {process.env.NODE_ENV !== 'development' && (
        <>
          <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=NO" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
