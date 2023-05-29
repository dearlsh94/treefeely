import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const { ENV } = publicRuntimeConfig

export default class AllstayDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#4e84ff" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <meta httpEquiv="Cache-Control" content="no-cache" />
          <meta httpEquiv="Expires" content="0" />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Page-Enter" content="blendTrans(Duration=0.0)" />
          <meta httpEquiv="Page-Exit" content="blendTrans(Duration=0.0)" />

          <meta name="robots" content="index,follow" />
          <meta name="author" content="Ethan.Lee" />
          <meta name="writer" content="Ethan.Lee" />
          <meta property="keyword" content="Treefeely, Weezip" />

          <link rel="icon" href="/static/favicon.png" />

          <meta name="description" content={'Root of Treefeely'} />
          <meta property="og:type" content={'website'} />
          <meta property="og:title" content={'Treefeely'} />
          <meta property="og:description" content={'Root of Treefeely'} />
          <meta property="og:url" content={'https://treefeely.com'} />
          <meta property="og:site_name" content={'Treefeely'} />
          <meta property="og:locale" content={'ko_KR'} />
          {/* <meta property="og:image" content={''} /> */}
          {/* <meta property="og:image:width" content={''} /> */}
          {/* <meta property="og:image:height" content={''} /> */}
          <meta property="twitter:title" content={'Treefeely'} />
          <meta property="twitter:description" content={'Root of Treefeely'} />
          <meta property="twitter:url" content={'https://treefeely.com'} />

          {/* <meta name="keywords" content={keywords} /> */}
          {/* <meta name="image" content={seo.image} /> */}
          {/* <meta name="twitter:card" content="summary_large_image" /> */}
          {/* <meta name="twitter:image" content={seo.image} /> */}
          {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}

          <meta name="naver-site-verification" content="7eb2269b8e8e2da390026b7a185890cb98124e98" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

AllstayDocument.getInitialProps = async ctx => {
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () => originalRenderPage()

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles)],
  }
}
