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
        <div className="weezip-line">
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
          </div>
        </div>
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
