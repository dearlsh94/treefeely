import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class TreefeelyDocument extends Document {
  render() {
    const desc = 'Root of Treefeely, Treefeely의 모든 서비스.'
    const ogImage = '/static/images/og_image_treefeely.png'

    const scriptTheme = `
      const configKey = 'TREEFEELY_CONFIG';
      const themeKey = 'treefeely-theme';
      const storage = localStorage.getItem(configKey);
      const theme = storage ? JSON.parse(storage)[themeKey] : null;
      const preferDarkQuery = '(prefers-color-scheme: dark)';
      const preferDark = window.matchMedia(preferDarkQuery).matches;
      const finalTheme = theme || (preferDark ? 'dark' : 'light');
      document.documentElement.setAttribute(themeKey, finalTheme);
    `

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
          <meta name="keyword" content="Treefeely, Weezip, gatsby-source-notion-feely" />
          <meta name="description" content={desc} />

          <link rel="icon" href="/static/favicon.png" />

          <meta name="image" content={ogImage} />
          <meta property="og:type" content={'website'} />
          <meta property="og:title" content={'Treefeely'} />
          <meta property="og:description" content={desc} />
          <meta property="og:url" content={'https://treefeely.com'} />
          <meta property="og:site_name" content={'Treefeely'} />
          <meta property="og:locale" content={'ko_KR'} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content={'1200'} />
          <meta property="og:image:height" content={'630'} />
          <meta property="twitter:title" content={'Treefeely'} />
          <meta property="twitter:description" content={desc} />
          <meta property="twitter:url" content={'https://treefeely.com'} />
          <meta name="twitter:image" content={ogImage} />

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

          <script dangerouslySetInnerHTML={{ __html: scriptTheme }} />
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
