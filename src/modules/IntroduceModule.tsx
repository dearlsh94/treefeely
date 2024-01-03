import FlexView from '@/components/common/FlexView'
import Head2Layout from '@/components/layouts/Head2Layout'
import Text from '@/components/common/Text'
import AOSFullGlassCardLayout from '@/components/layouts/AOSFullGlassCardLayout'
import { fontSizes } from '@/components/common/constants'
import { css } from '@emotion/react'

export default function IntroduceModule() {
  return (
    <FlexView
      direction="column"
      css={css`
        color: #fff;
      `}
    >
      <Head2Layout text={'안녕하세요.'} />
      <AOSFullGlassCardLayout type="fade-down">
        <Text>더 따뜻하고 편리한 세상이 되기를 소망하는</Text>
        <Text fontSize={fontSizes.small}>프론트엔드 개발자</Text>
        <Text fontSize={fontSizes.normal}>
          <strong
            css={css`
              font-weight: 600;
            `}
          >
            이승환
          </strong>
          이라고 합니다.
        </Text>
      </AOSFullGlassCardLayout>
      <AOSFullGlassCardLayout type="fade-down">
        <Text>개발자는 소통이 어렵다는 선입견을</Text>
        <Text>오해로 바꾸고 싶어요.</Text>
      </AOSFullGlassCardLayout>
      <AOSFullGlassCardLayout type="fade-down">
        <Text>낙타와 사자, 아이의 모습으로</Text>
        <Text>살아가기를 소망합니다.</Text>
      </AOSFullGlassCardLayout>
    </FlexView>
  )
}
