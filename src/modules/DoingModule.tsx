import FlexView from '@/components/common/FlexView'
import AOSHalfLayout from '@/components/layouts/AOSHalfLayout'
import Head2Layout from '@/components/layouts/Head2Layout'
import Text from '@/components/common/Text'
import { IconNotion } from '@/components/icons/IconNotion'
import { css } from '@emotion/react'
import IconLinkOut from '@/components/icons/IconLinkOut'
import Linker from '@/components/common/Linker'
import { fontSizes, fontWeights } from '@/components/common/constants'

const doings = [
  {
    name: '글또 9기',
    link: 'https://www.notion.so/ac5b18a482fb4df497d4e8257ad4d516',
    link_type: 'notion',
    date: '2023.11',
  },
  {
    name: '프론트엔드 다이빙 클럽',
    link: 'https://toss.tech/article/frontend-diving-club',
    link_type: 'default',
    date: '2023.11',
  },
  {
    name: '북이영화',
    link: 'https://treefeely.notion.site/treefeely/2543fb95b1564550b3e8dcfdf4d63a1b',
    link_type: 'notion',
    date: '2021.06',
  },
  {
    name: '미라클 버즈',
    link: '',
    link_type: '',
    date: '2021.03',
  },
  {
    name: '검치단',
    link: '',
    link_type: '',
    date: '2021.03',
  },
]
export default function DoingModule() {
  return (
    <FlexView direction="column">
      <Head2Layout text={'이런 활동들을 하고 있어요.'} />
      {doings.map((s, i) => (
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
                column-gap: 8px;
              `}
            >
              {s.name}
              {s.link && (s.link.includes('notion') ? <IconNotion /> : <IconLinkOut size={18} />)}
            </Text>
            <Text fontSize={fontSizes.small}>{s.date}</Text>
          </Linker>
        </AOSHalfLayout>
      ))}
    </FlexView>
  )
}
