import FlexView from '@/components/common/FlexView'
import AOSHalfLayout from '@/components/layouts/AOSHalfLayout'
import Head2Layout from '@/components/layouts/Head2Layout'
import Text from '@/components/common/Text'
import { css } from '@emotion/react'
import { fontSizes, fontWeights } from '@/components/common/constants'
import IconLinkOut from '@/components/icons/IconLinkOut'
import Linker from '@/components/common/Linker'

const services = [
  {
    name: 'Weezip',
    link: 'https://weezip.treefeely.com',
    date: '2023.03',
  },
  {
    name: 'gatsby-source-notion-feely',
    link: 'https://www.npmjs.com/package/gatsby-source-notion-feely',
    date: '2023.10',
  },
  {
    name: 'Letter Me',
    link: 'https://letter-me.treefeely.com',
    date: '2023.09',
  },
]
export default function TreefeelyModule() {
  return (
    <FlexView direction="column">
      <Head2Layout text={'Treefeely 서비스들이예요.'} />
      {services.map((s, i) => (
        <AOSHalfLayout key={s.name} type={(i + 1) % 2 === 1 ? 'flip-left' : 'flip-right'}>
          <Linker
            url={s.link}
            isBlank={true}
            aria-label={`${s.name} 이동`}
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
                text-align: center;
                text-wrap: balance;
                column-gap: 8px;
              `}
            >
              {s.name}
              <IconLinkOut size={18} />
            </Text>
            <Text fontSize={fontSizes.small}>{s.date}</Text>
          </Linker>
        </AOSHalfLayout>
      ))}
    </FlexView>
  )
}
