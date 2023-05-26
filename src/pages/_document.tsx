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
          <meta name="author" content="" />
          <meta name="subject" content="" />
          <meta name="writer" content="" />
          <meta name="classification" content="" />
          <meta property="keyword" content="" />
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
