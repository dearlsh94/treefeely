import CareerWrapper from './CareerWrapper'

export default function Bizntech() {
  const sentences = [
    'SI 업체인 비즈앤테크컨설팅에서 이랜드와 KT의 프로젝트를 수행했습니다.',
    '이랜드 MDM(Master Data Management) 시스템을 유지보수하고 전사 ERP3.0 프로젝트에 맞춰 신규 I/F를 개발했습니다.',
    'Angular를 이용해 위치정보 코드 관리 프로세스를 자동화하는 챗봇 프로그램을 개발했습니다.',
  ]
  return (
    <CareerWrapper
      name={'비즈앤테크컨설팅'}
      role={'선임 컨설턴트'}
      from={'2019.08'}
      to={'2021.01'}
      languages={['Java', 'Jsp', 'Angular']}
      sentences={sentences}
    />
  )
}
