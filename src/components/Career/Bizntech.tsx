import { Fragment } from 'react'
import Text from '@/components/common/Text'

export default function Bizntech() {
  return (
    <Fragment>
      <Text className="company__name">비즈앤테크컨설팅</Text>
      <Text className="company__role">선임 컨설턴트</Text>
      <Text className="company__date">2019.08 ~ 2021.01</Text>
      <Text className="company__language">Java, Jsp, Angular</Text>
      <Text>SI 업체인 비즈앤테크컨설팅에서 이랜드와 KT의 프로젝트를 수행했습니다.</Text>
      <Text>
        이랜드 MDM(Master Data Management) 시스템을 유지보수하고 전사 ERP3.0 프로젝트에 맞춰 신규 I/F를 개발했습니다.
      </Text>
      <Text>Angular를 이용해 위치정보 코드 관리 프로세스를 자동화하는 챗봇 프로그램을 개발했습니다.</Text>
    </Fragment>
  )
}
