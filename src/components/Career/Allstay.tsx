import { Fragment } from 'react'
import Text from '@/components/common/Text'
export default function Allstay() {
  return (
    <Fragment>
      <Text className="company__name">올스테이</Text>
      <Text className="company__role">Front-end Developer</Text>
      <Text className="company__date">2021.01 ~ 2022.08</Text>
      <Text className="company__language">React, Typescript, Flutter, React Native</Text>
      <Text textAlign="left">숙소 최저가 제공을 위한 메타서치 플랫폼 올스테이의 웹 개발을 진행했습니다.</Text>
      <Text textAlign="left">Mobile First UI를 도입하고, Next.js 8에서 12로 마이그레이션을 진행했습니다.</Text>
      <Text textAlign="left">당시 Flutter 2.0 환경으로 마이그레이션을 시도해 본 경험이 있습니다.</Text>
      <Text textAlign="left">React Native Webview를 활용한 하이브리드 앱 환경을 구축했습니다.</Text>
      <Text textAlign="left">네이버, 카카오, 구글, 애플의 0Auth 연동을 진행했습니다.</Text>
    </Fragment>
  )
}
