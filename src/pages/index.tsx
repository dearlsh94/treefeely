import type { NextPage } from 'next'
import { Fragment } from 'react'
import Head from 'next/head'
import CircleText from '@/components/ui/CircleText'
import LineText from '@/components/ui/LineText'

interface IHome {}

const Index: NextPage<IHome> = () => {
  return (
    <Fragment>
      <Head>
        <title>Treefeely</title>
      </Head>
      <main className="home-container">
        <CircleText text="TREEFEELY TREEFEELY TREEFEELY" size={'300px'} />
        <a className="weezip-line" href="https://weezip.treefeely.com" target="_blank" rel="noreferrer">
          <LineText text="WEEZIP" />
        </a>
      </main>
    </Fragment>
  )
}

export default Index
