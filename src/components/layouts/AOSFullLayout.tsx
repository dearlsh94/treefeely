import { css } from '@emotion/react'

interface AOSFullLayoutProps {
  align?: 'flex-start' | 'center' | 'flex-end'
  children: React.ReactNode
}

export default function AOSFullLayout({ align = 'center', children }: AOSFullLayoutProps) {
  return (
    <div
      data-aos={'fade-down'}
      css={css`
        width: 90vw;
        max-width: 1024px;
        clear: both;
        min-height: 120px;
        border-radius: 8px;
        margin: 8vh 0;
        padding: 16px 12px;
        display: flex;
        justify-content: center;
        align-items: ${align};
        flex-direction: column;
        row-gap: 8px;
        box-sizing: border-box;
      `}
    >
      {children}
    </div>
  )
}
