import NextErrorComponent, { ErrorProps as NextErrorProps } from 'next/error'
import { NextPageContext } from 'next'

export type ErrorPageProps = {
  err: Error
  statusCode: number
  isReadyToRender: boolean
  children?: React.ReactElement
}

export type ErrorProps = {
  isReadyToRender: boolean
} & NextErrorProps

const ErrorPage = (props: ErrorPageProps): JSX.Element => {
  const { statusCode, isReadyToRender, err, children = null } = props

  console.log('statusCode', statusCode)
  // eslint-disable-next-line no-debugger

  if (process.env.NEXT_PUBLIC_APP_STAGE !== 'development') {
    console.warn('ErrorPage details:')
    console.error(err)
  }

  if (!isReadyToRender && err) {
    // Sentry.captureException(err)
    console.error(err)
  }

  return <>{children ?? <NextErrorComponent statusCode={statusCode} />}</>
}

export async function getServerSideProps(props: NextPageContext) {
  const { res, err, asPath } = props

  const errorInitialProps: ErrorProps = (await NextErrorComponent.getInitialProps({
    res,
    err,
  } as NextPageContext)) as ErrorProps

  if (process.env.NEXT_PUBLIC_APP_STAGE !== 'production') {
    console.error('ErrorPage.getInitialProps - 에러발생!! details :', err)
  }

  errorInitialProps.isReadyToRender = true

  if (res?.statusCode === 404) {
    return {
      props: {
        statusCode: 404,
        isReadyToRender: true,
      },
    }
  }

  if (err) {
    return {
      props: { ...errorInitialProps },
    }
  }

  return {
    props: { ...errorInitialProps },
  }
}

export default ErrorPage
