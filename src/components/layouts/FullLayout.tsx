import { css } from '@emotion/react'
import FlexView from '@/components/common/FlexView'

interface FullLayoutProps {
  children: React.ReactNode
}

export default function FullLayout({ children }: FullLayoutProps) {
  return (
    <FlexView
      direction="column"
      align="start-center"
      width="fill"
      css={css`
        min-height: 100vh;
        padding: 2rem 1.25rem;
        background-color: var(--color-background);
      `}
    >
      <FlexView
        direction="column"
        align="start-center"
        width="fill"
        rowGap={24}
        css={css`
          max-width: 1280px;
        `}
      >
        {children}
      </FlexView>
    </FlexView>
  )
}
