import FlexView from '@/components/common/FlexView'
import AOSHalfLayout from '@/components/layouts/AOSHalfLayout'
import Head2Layout from '@/components/layouts/Head2Layout'
import Text from '@/components/common/Text'
import { css } from '@emotion/react'
import { fontSizes, fontWeights } from '@/components/common/constants'
import IconLinkOut from '@/components/icons/IconLinkOut'

export default function TreefeelyModule() {
  const services = () => {
    return [
      {
        name: '개인 블로그 Weezip',
        link: 'https://weezip.treefeely.com',
        date: '2023.03',
      },
      {
        name: '서로를 향한 편 지 한 통, Letter Me',
        link: 'https://letter-me.treefeely.com',
        date: '2023.09',
      },
    ]
  }
  return (
    <FlexView direction="column">
      <Head2Layout text={'Treefeely 서비스들이예요.'} />
      {services().map((s, i) => (
        <AOSHalfLayout key={s.name} type={(i + 1) % 2 === 1 ? 'flip-left' : 'flip-right'}>
          <a
            href={s.link}
            target="_blank"
            aria-label={`${s.name} 이동`}
            rel="noopener noreferrer"
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              row-gap: 4px;
              width: 100%;
              height: 100%;
            `}
          >
            <Text
              fontWeight={fontWeights.w700}
              css={css`
                display: flex;
                align-items: center;
                column-gap: 8px;
              `}
            >
              {s.name}
              <IconLinkOut size={18} />
            </Text>
            <Text fontSize={fontSizes.small}>{s.date}</Text>
          </a>
        </AOSHalfLayout>
      ))}
    </FlexView>
  )
}
