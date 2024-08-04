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
          title="Slosla"
          description="AI를 활용하여 저속노화에 대한 정보와 팁을 제공하고, 사용자들이 서로 경험을 공유할 수 있는 플랫폼입니다."
          badges={['React']}
          link="https://slosla.treefeely.com"
        />
        <ServiceIntro
          title="WeeZip"
          description="Treefeely 메인테이너인 이썬의 블로그예요. 노션을 CMS로 사용해서 기술, 회고, 리뷰 등 다양한 글을 작성하고 있어요."
          badges={['React']}
          link="https://weezip.treefeely.com"
        />
        <ServiceIntro
          title="gatsby-source-notion-feely"
          description="Gatsby에서 노션 데이터베이스의 데이터를 불러올 수 있는 플러그인이에요. 다중 데이터베이스 연결 및 필터링 기능 등을 제공하고 있어요."
          badges={['Gatsby']}
          link="https://github.com/dearlsh94/gatsby-source-notion-feely"
        />
        <ServiceIntro
          title="Radio-Tree"
          description="한국 서울 기준 주요 라디오 주파수와 누군가의 취향이 담긴 주요 프로그램의 시작 시간을 확인할 수 있어요."
          badges={['Astro']}
          link="https://radio-tree.treefeely.com"
        />
        <ServiceIntro
          title="Letter-Me"
          description="편지함 주소만 알면 누구나 편지를 보낼 수 있어요. 편지함을 만들고 주소를 공유해보세요."
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
