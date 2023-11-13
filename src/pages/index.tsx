import { Fragment } from 'react'
import Head from 'next/head'
import AOSFullLayout from '@/components/layouts/AOSFullLayout'
import BackgroundContainer from '@/components/layouts/BackgroundContainer'
import FullLayout from '@/components/layouts/FullLayout'
import MainTitle from '@/components/MainTitle'
import Text from '@/components/common/Text'
import AOSHalfLayout from '@/components/layouts/AOSHalfLayout'
import Baropharm from '@/components/Career/Baropharm'
import Allstay from '@/components/Career/Allstay'
import Bizntech from '@/components/Career/Bizntech'
import Viascope from '@/components/Career/Viascope'

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
        <AOSFullLayout type="fade-down">
          <Text>안녕하세요.</Text>
        </AOSFullLayout>
        <AOSFullLayout type="fade-down">
          <Text>
            마음을 움직이는 기술을 통해 더 편리하고 즐거운 세상이 되기를 소망하는 프론트엔드 개발자 이승환이라고 합니다.
          </Text>
        </AOSFullLayout>
        <AOSFullLayout type="fade-down">
          <Text>개발자는 소통이 어렵다는 선입견을 오해로 바꾸고 싶어요.</Text>
        </AOSFullLayout>
        <AOSFullLayout type="fade-down">
          <Text>낙타와 사자, 아이의 모습으로 살아가기를 소망합니다.</Text>
        </AOSFullLayout>
        <AOSFullLayout type="fade-down">
          <Text>저는 회사에서 이런 일들을 했어요.</Text>
        </AOSFullLayout>
        <AOSFullLayout type="fade-right" align="flex-start">
          <Baropharm />
        </AOSFullLayout>
        <AOSFullLayout type="fade-right" align="flex-start">
          <Allstay />
        </AOSFullLayout>
        <AOSFullLayout type="fade-right" align="flex-start">
          <Bizntech />
        </AOSFullLayout>
        <AOSFullLayout type="fade-right" align="flex-start">
          <Viascope />
        </AOSFullLayout>
        <AOSFullLayout type="fade-down">
          <Text>저는 이런 활동들을 하고 있어요.</Text>
        </AOSFullLayout>
        <AOSHalfLayout type="flip-left">
          <Text>프론트엔드 다이빙 클럽 멤버</Text>
          2023.11 ~
        </AOSHalfLayout>
        <AOSHalfLayout type="flip-right">
          <Text>재고 관리 서비스 안녕재고 팀원</Text>
          2023.10 ~
        </AOSHalfLayout>
        <AOSHalfLayout type="flip-left">
          <Text>개인 블로그 Weezip 운영</Text>
          2023.04 ~
        </AOSHalfLayout>
        <AOSHalfLayout type="flip-right">
          <Text>영화 및 독서모임 북이영화 멤버</Text>
          2021.06 ~
        </AOSHalfLayout>
        <AOSHalfLayout type="flip-left">
          <Text>클럽하우스 음악 모임 검치단 단원</Text>
          2021.03 ~
        </AOSHalfLayout>
        <AOSFullLayout type="fade-down">
          <Text>제가 했던 일들이에요.</Text>
        </AOSFullLayout>
        <AOSFullLayout type="flip-up">
          <Text>gatsy-source-notion-feely 개발</Text>
          2023.10
        </AOSFullLayout>
        <AOSFullLayout type="flip-up">
          <Text>넥슨 게임 바람의 나라 커뮤니티 도톨 V1 구축</Text>
          2020.07 ~ 2020.12
        </AOSFullLayout>
        <AOSFullLayout type="flip-up">
          <Text>리그 오브 레전드 랜덤 챔피언 스펠 선택기 개발</Text>
          2020.03
        </AOSFullLayout>
        <AOSFullLayout type="flip-up">
          <Text>Android 푸시 메모 알람 매니저 Push Alarmy 출시</Text>
          2017.04
        </AOSFullLayout>
      </BackgroundContainer>
    </Fragment>
  )
}
