import FlexView from '@/components/common/FlexView'
import Head2Layout from '@/components/layouts/Head2Layout'
import Text from '@/components/common/Text'
import AOSFullCardLayout from '@/components/layouts/AOSFullCardLayout'
import { fontSizes } from '@/components/common/constants'
import { css } from '@emotion/react'

export default function DoingModule() {
  const titleText = (text: string) => (
    <Text
      fontWeight={700}
      fontSize={'1.1rem'}
      css={css`
        margin-bottom: 0.5rem;
      `}
    >
      {text}
    </Text>
  )

  return (
    <FlexView direction="column">
      <Head2Layout text={'이런 프로젝트를 했어요.'} />
      <AOSFullCardLayout type="flip-up">
        {titleText('gatsy-source-notion-feely')}
        <Text>Gatsby에서 Notion Database를 쉽게 연결할 수 있어요.</Text>
        <Text fontSize={fontSizes.small}>2023.10</Text>
      </AOSFullCardLayout>
      <AOSFullCardLayout type="flip-up">
        {titleText('서로를 향한 편지 한 통, Letter Me')}
        <Text>개인 편지함을 만들고, 다른 편지함에 편지를 보낼 수 있어요.</Text>
        <Text fontSize={fontSizes.small}>2023.09</Text>
      </AOSFullCardLayout>
      <AOSFullCardLayout type="flip-up">
        {titleText('Gatsby + Notion 블로그 Weezip')}
        <Text>Gatsby와 Notion을 사용해 만든 개인 블로그예요.</Text>
        <Text fontSize={fontSizes.small}>2023.04</Text>
      </AOSFullCardLayout>
      <AOSFullCardLayout type="flip-up">
        {titleText('넥슨 게임 바람의 나라 커뮤니티 도톨 V1')}
        <Text>개발환경, 회원관리, 게시판 등을 작업했어요.</Text>
        <Text fontSize={fontSizes.small}>2020.07 ~ 2020.12</Text>
      </AOSFullCardLayout>
      <AOSFullCardLayout type="flip-up">
        {titleText('리그 오브 레전드 랜덤 챔피언 스펠 선택기')}
        <Text>각 라인 별 랜덤 챔피언과 랜덤 스펠을 선택할 수 있어요.</Text>
        <Text fontSize={fontSizes.small}>2020.03</Text>
      </AOSFullCardLayout>
      <AOSFullCardLayout type="flip-up">
        {titleText('Android 푸시 메모 알람 매니저 Push Alarmy')}
        <Text>예약된 시간에 예약된 메시지를 푸시 알람을 보내줘요.</Text>
        <Text>학생 수준의 토이 프로젝트였는데, 개인적으로 아쉬운 프로젝트 중 하나예요.</Text>
        <Text fontSize={fontSizes.small}>2017.04</Text>
      </AOSFullCardLayout>
    </FlexView>
  )
}
