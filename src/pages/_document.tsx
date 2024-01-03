import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class TreefeelyDocument extends Document {
  render() {
    const desc = '더 따뜻하고 편리한 세상이 되기를 소망하는 프런트엔드 개발자 이승환입니다.'

    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#4e84ff" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <meta name="robots" content="index,follow" />
          <meta name="author" content="Ethan.Lee" />
          <meta name="writer" content="Ethan.Lee" />
          <meta name="keyword" content="Treefeely, Ethan, dearlsh94" />
          <meta name="description" content={desc} />

          <link rel="icon" href="/static/favicon.png" />

          <meta property="og:type" content={'website'} />
          <meta property="og:title" content={'Treefeely'} />
          <meta property="og:description" content={desc} />
          <meta property="og:url" content={'https://treefeely.com'} />
          <meta property="og:site_name" content={'Treefeely'} />
          <meta property="og:locale" content={'ko_KR'} />
          {/* <meta property="og:image" content={''} /> */}
          {/* <meta property="og:image:width" content={''} /> */}
          {/* <meta property="og:image:height" content={''} /> */}
          <meta property="twitter:title" content={'Treefeely'} />
          <meta property="twitter:description" content={desc} />
          <meta property="twitter:url" content={'https://treefeely.com'} />

          {/* <meta name="image" content={seo.image} /> */}
          {/* <meta name="twitter:card" content="summary_large_image" /> */}
          {/* <meta name="twitter:image" content={seo.image} /> */}
          {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}

          <meta name="naver-site-verification" content="7eb2269b8e8e2da390026b7a185890cb98124e98" />
          {process.env.NODE_ENV !== 'development' && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              `,
              }}
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

TreefeelyDocument.getInitialProps = async ctx => {
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () => originalRenderPage()

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles)],
  }
}
