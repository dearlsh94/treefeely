import { Text, FlexView } from '../common'
import { css } from '@emotion/react'
import IconReact from '../icons/IconReact'
import IconSvelte from '../icons/IconSvelte'
import IconGatsby from '../icons/IconGatsby'
import IconNextjs from '../icons/IconNextjs'
import IconAstro from '../icons/IconAstro'

export type BadgeType = 'React' | 'Svelte' | 'Nextjs' | 'Gatsby' | 'Astro'

interface BadgeProps {
  type: BadgeType
}

export default function Badge({ type }: BadgeProps) {
  const borderColor =
    type === 'React'
      ? '#61dafb'
      : type === 'Svelte'
      ? '#ff4545'
      : type === 'Gatsby'
      ? '#64328B'
      : type === 'Nextjs'
      ? '#000'
      : type === 'Astro'
      ? '#fe5c01'
      : 'var(--color-mono)'
  return (
    <FlexView
      colGap={8}
      css={css`
        padding: 4px 12px;
        border-radius: 16px;
        border: 1px solid ${borderColor};
        background-color: var(--color-background);
      `}
    >
      {type === 'React' && <IconReact size={'1.25rem'} />}
      {type === 'Svelte' && <IconSvelte size={'1.25rem'} />}
      {type === 'Gatsby' && <IconGatsby size={'1.25rem'} />}
      {type === 'Nextjs' && <IconNextjs size={'1.25rem'} />}
      {type === 'Astro' && <IconAstro size={'1.25rem'} />}
      <Text noDrag>{type}</Text>
    </FlexView>
  )
}
