import FlexView from '@/components/common/FlexView'
import AOSHalfLayout from '@/components/layouts/AOSHalfLayout'
import Head2Layout from '@/components/layouts/Head2Layout'
import Text from '@/components/common/Text'

export default function DoingModule() {
  return (
    <FlexView direction="column">
      <Head2Layout text={'이런 활동들을 하고 있어요.'} />
      <AOSHalfLayout type="flip-left">
        <Text textAlign="center">글또 9기</Text>
        2023.11 ~
      </AOSHalfLayout>
      <AOSHalfLayout type="flip-right">
        <Text textAlign="center">
          프론트엔드
          <br />
          다이빙 클럽
        </Text>
        2023.11 ~
      </AOSHalfLayout>
      <AOSHalfLayout type="flip-left">
        <Text textAlign="center">
          재고 관리 서비스
          <br /> 안녕재고
        </Text>
        2023.10 ~
      </AOSHalfLayout>
      <AOSHalfLayout type="flip-right">
        <Text textAlign="center">
          개인 블로그
          <br /> Weezip
        </Text>
        2023.04 ~
      </AOSHalfLayout>
      <AOSHalfLayout type="flip-left">
        <Text textAlign="center">
          영화 및 독서모임
          <br /> 북이영화
        </Text>
        2021.06 ~
      </AOSHalfLayout>
      <AOSHalfLayout type="flip-right">
        <Text textAlign="center">
          클럽하우스 음악모임
          <br /> 검치단
        </Text>
        2021.03 ~
      </AOSHalfLayout>
    </FlexView>
  )
}
