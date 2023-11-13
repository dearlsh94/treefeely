import CareerWrapper from './CareerWrapper'
export default function Allstay() {
  const sentences = [
    '숙소 최저가 제공을 위한 메타서치 플랫폼 올스테이의 웹 개발을 진행했습니다.',
    'Mobile First UI를 도입하고, Next.js 8에서 12로 마이그레이션을 진행했습니다.',
    'Flutter 2.0 환경으로 마이그레이션을 시도해 본 경험이 있습니다.',
    'React Native Webview를 활용한 하이브리드 앱 환경을 구축했습니다.',
    '네이버, 카카오, 구글, 애플의 0Auth 연동을 진행했습니다.',
  ]
  return (
    <CareerWrapper
      name={'올스테이'}
      role={'Front-end Developer'}
      from={'2021.01'}
      to={'2022.07'}
      languages={['React', 'Typescript', 'Flutter', 'ReactNative']}
      sentences={sentences}
    />
  )
}
