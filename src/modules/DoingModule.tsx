import FlexView from '@/components/common/FlexView'
import AOSHalfLayout from '@/components/layouts/AOSHalfLayout'
import Head2Layout from '@/components/layouts/Head2Layout'
import Text from '@/components/common/Text'

export default function DoingModule() {
  return (
    <FlexView direction="column">
      <Head2Layout text={'저는 이런 활동들을 하고 있어요.'} />
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
    </FlexView>
  )
}
