import { Fragment } from 'react'
import Head from 'next/head'
import BackgroundContainer from '@/components/layouts/BackgroundContainer'
import FullLayout from '@/components/layouts/FullLayout'
import MainTitle from '@/components/MainTitle'
import CareerModule from '@/modules/CareerModule'
import DoingModule from '@/modules/DoingModule'
import DoneModule from '@/modules/DoneModule'
import IntroduceModule from '@/modules/IntroduceModule'
import FlexView from '@/components/common/FlexView'

export default function IndexPage() {
  return (
    <Fragment>
      <Head>
        <title>Treefeely</title>
      </Head>
      <BackgroundContainer>
        <FullLayout>
          <MainTitle />
        </FullLayout>
        <FlexView direction="column" rowGap={10}>
          <IntroduceModule />
          <CareerModule />
          <DoingModule />
          <DoneModule />
        </FlexView>
      </BackgroundContainer>
    </Fragment>
  )
}
