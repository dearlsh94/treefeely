import React from 'react'
import Text from '@/components/common/Text'
import { fontSizes, fontWeights } from '../common/constants'
import FlexView from '../common/FlexView'
import { css } from '@emotion/react'
interface CareerWrapperProps {
  name: string
  role: string
  from: string
  to?: string
  languages: string[]
  children: React.ReactNode
}
export default function CareerWrapper({ name, role, from, to, languages, children }: CareerWrapperProps) {
  return (
    <FlexView direction="column" rowGap={16}>
      <FlexView direction="column" rowGap={4}>
        <Text className="company__name" fontSize={fontSizes.large} fontWeight={fontWeights.w700}>
          {name}
        </Text>
        <Text className="company__role" fontSize={fontSizes.small}>
          {role}
        </Text>
        <Text className="company__date" fontSize={fontSizes.small}>
          {from} ~ {to}
        </Text>
        <FlexView
          className="company__languages"
          colGap={8}
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
      <FlexView direction="column" rowGap={12}>
        {children}
      </FlexView>
    </FlexView>
  )
}
