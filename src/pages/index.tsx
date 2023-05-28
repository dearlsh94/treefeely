import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { Fragment } from 'react'
import Head from 'next/head'
import CircleText from '@/components/ui/CircleText'

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
          <div className="text-box">
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
            <span>WEEZIP</span>
          </div>
        </a>
      </main>
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  }
}

export default Index
