import { Fragment } from 'react'

import Head from 'next/head'
import FullLayout from '@/components/layouts/FullLayout'
import Contact from '@/components/ui/Contact'
import ServiceIntro from '@/components/ui/ServiceIntro'
import Header from '@/components/ui/Header'
import Head1Divider from '@/components/ui/Head1Divider'
import Text from '@/components/common/Text'

export default function IndexPage() {
  return (
    <Fragment>
      <Head>
        <title>Treefeely</title>
      </Head>
      <Header />
      <FullLayout>
        <Head1Divider title="TREEFEELY" />
        <ServiceIntro
          title="WeeZip"
          description="노션을 CMS로 사용하고 있는 개인 블로그예요. 기술, 회고, 리뷰 등 다양한 글을 작성하고 있어요."
          badges={['React']}
          link="https://weezip.treefeely.com"
        />
        <ServiceIntro
          title="gatsby-source-notion-feely"
          description="Gatsby에서 노션 데이터베이스의 데이터를 불러올 수 있는 플러그인이에요."
          badges={['Gatsby']}
          link="https://github.com/dearlsh94/gatsby-source-notion-feely"
        />
        <ServiceIntro
          title="Letter-Me"
          description="편지함 주소만 알면 누구나 편지를 보낼 수 있어요. 편지함을 만들고 주소를 공유하세요. "
          badges={['Svelte']}
          link="https://letter-me.treefeely.com"
        />
        <Contact />
        <Text textAlign="center" color={'var(--color-grey-2)'}>
          Copyright 2024. Ethan all rights reserved.
        </Text>
      </FullLayout>
    </Fragment>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
