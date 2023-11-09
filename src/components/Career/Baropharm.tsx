import Text from '@/components/common/Text'
import CareerWrapper from './CareerWrapper'

export default function Baropharm() {
  return (
    <CareerWrapper
      name={'바로팜'}
      role={'Front-end Developer'}
      from={'2022.08'}
      languages={['Svelte', 'React', 'Typescript', 'Sass']}
    >
      <Text textAlign="left">약사님들을 위한 플랫폼 바로팜에서 주문, 반품 등을 고도화하고 UX를 개선하고 있습니다.</Text>
      <Text textAlign="left">커뮤니티 개발환경을 구성하고, 마케팅 프로모션 및 전시 영역 등을 고도화 했습니다.</Text>
      <Text textAlign="left">개발 환경을 개선하고, 모니터링 툴 및 버전 관리를 도입했습니다.</Text>
      <Text textAlign="left">PO, 디자인, 마케팅, 운영팀 등 여러 부서와 협업을 진행하고 있습니다.</Text>
      <Text textAlign="left">업무 프로세스 개선, 기술 공유, 피드백 문화 도입 등 조직 문화를 위해 노력합니다.</Text>
    </CareerWrapper>
  )
}
