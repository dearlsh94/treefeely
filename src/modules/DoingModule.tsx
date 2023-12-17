import FlexView from '@/components/common/FlexView'
import AOSHalfLayout from '@/components/layouts/AOSHalfLayout'
import Head2Layout from '@/components/layouts/Head2Layout'
import Text from '@/components/common/Text'
import { IconNotion } from '@/components/icons/IconNotion'
import { css } from '@emotion/react'
import IconLinkOut from '@/components/icons/IconLinkOut'

export default function DoingModule() {
  return (
    <FlexView direction="column">
      <Head2Layout text={'이런 활동들을 하고 있어요.'} />
      <AOSHalfLayout type="flip-right">
        <a
          href={'https://www.notion.so/ac5b18a482fb4df497d4e8257ad4d516'}
          target="_blank"
          aria-label={`글또 노션 페이지 이동`}
          rel="noopener noreferrer"
          css={css`
            width: 24px;
            height: 24px;
          `}
        >
          <IconNotion />
        </a>
        <Text textAlign="center">글또 9기</Text>
        2023.11 ~
      </AOSHalfLayout>
      <AOSHalfLayout type="flip-left">
        <a
          href={'https://toss.tech/article/frontend-diving-club'}
          target="_blank"
          aria-label={`프론트엔드 다이빙 클럽 소개 페이지 이동`}
          rel="noopener noreferrer"
          css={css`
            width: 18px;
            height: 18px;
          `}
        >
          <IconLinkOut size={18} />
        </a>
        <Text textAlign="center">
          프론트엔드
          <br />
          다이빙 클럽
        </Text>
        2023.11 ~
      </AOSHalfLayout>
      <AOSHalfLayout type="flip-right">
        <a
          href={'https://treefeely.notion.site/treefeely/2543fb95b1564550b3e8dcfdf4d63a1b'}
          target="_blank"
          aria-label={`북이영화 노션 페이지 이동`}
          rel="noopener noreferrer"
          css={css`
            width: 24px;
            height: 24px;
          `}
        >
          <IconNotion />
        </a>
        <Text textAlign="center">
          영화 및 독서모임
          <br /> 북이영화
        </Text>
        2021.06 ~
      </AOSHalfLayout>
      <AOSHalfLayout type="flip-left">
        <Text textAlign="center">
          자기계발 모임
          <br /> 미라클버즈
        </Text>
        2021.03 ~
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
