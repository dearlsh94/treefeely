import Text from '@/components/common/Text'
import { fontSizes, fontWeights, justifyContents } from '../common/constants'
import FlexView from '../common/FlexView'
import { css } from '@emotion/react'
interface CareerWrapperProps {
  name: string
  role: string
  from: string
  to?: string
  languages: string[]
  sentences: string[]
}
export default function CareerWrapper({ name, role, from, to, languages, sentences }: CareerWrapperProps) {
  return (
    <FlexView direction="column" rowGap={1} width={'fill'}>
      <FlexView direction="column" rowGap={0.25}>
        <Text fontSize={fontSizes.large} fontWeight={fontWeights.w700}>
          {name}
        </Text>
        <Text fontSize={fontSizes.small}>{role}</Text>
        <Text fontSize={fontSizes.small}>
          {from} ~ {to}
        </Text>
        <FlexView
          justifyContent={justifyContents.start}
          colGap={0.75}
          css={css`
            margin-top: 4px;
            flex-wrap: wrap;
            row-gap: 8px;
          `}
        >
          {languages.map(l => (
            <FlexView
              key={l}
              center
              flex={0}
              css={css`
                border: 1px solid #e5e5e5;
                border-radius: 4px;
                padding: 4px 8px;
              `}
            >
              {l}
            </FlexView>
          ))}
        </FlexView>
      </FlexView>
      <ul
        css={css`
          width: 80%;
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          row-gap: 12px;
        `}
      >
        {sentences.map((s, i) => (
          <li key={i}>
            <Text key={i} textAlign="left">
              {s}
            </Text>
          </li>
        ))}
      </ul>
    </FlexView>
  )
}
