import FlexView from '@/components/common/FlexView'
import Head2Layout from '@/components/layouts/Head2Layout'
import Text from '@/components/common/Text'
import AOSFullCardLayout from '@/components/layouts/AOSFullCardLayout'

export default function DoingModule() {
  return (
    <FlexView direction="column">
      <Head2Layout text={'이런 프로젝트를 했어요.'} />
      <AOSFullCardLayout type="flip-up">
        <Text>gatsy-source-notion-feely</Text>
        2023.10
      </AOSFullCardLayout>
      <AOSFullCardLayout type="flip-up">
        <Text>서로를 향한 편지 한 통, Letter Me</Text>
        2023.09
      </AOSFullCardLayout>
      <AOSFullCardLayout type="flip-up">
        <Text>Gatsby + Notion 블로그 Weezip</Text>
        2023.04
      </AOSFullCardLayout>
      <AOSFullCardLayout type="flip-up">
        <Text>넥슨 게임 바람의 나라 커뮤니티 도톨 V1</Text>
        2020.07 ~ 2020.12
      </AOSFullCardLayout>
      <AOSFullCardLayout type="flip-up">
        <Text>리그 오브 레전드 랜덤 챔피언 스펠 선택기</Text>
        2020.03
      </AOSFullCardLayout>
      <AOSFullCardLayout type="flip-up">
        <Text textAlign="center">Android 푸시 메모 알람 매니저 Push Alarmy</Text>
        2017.04
      </AOSFullCardLayout>
    </FlexView>
  )
}
