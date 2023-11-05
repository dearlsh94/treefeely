import { Fragment } from 'react'
import Text from '@/components/common/Text'

export default function Viascope() {
  return (
    <Fragment>
      <Text>스콥정보통신</Text>
      <Text>연구원</Text>
      <Text>2018.10 ~ 2019.02</Text>
      <Text>Spring boot, Classic ASP, php</Text>
      <Text textAlign="left">자사 솔루션 라이센스 관리 사이트를 php에서 Spring boot로 마이그레이션했습니다.</Text>
      <Text textAlign="left">
        WAB(Web Authentication Browser) 서비스를 Classic ASP에서 Spring boot로 마이그레이션했습니다.
      </Text>
      <Text textAlign="left">
        고객사에 설치되어있는 WAB을 유지보수하고, 신규 고객사의 요구사항에 맞춰 커스터마이징 후 도입하는 작업을
        진행했습니다.
      </Text>
    </Fragment>
  )
}
