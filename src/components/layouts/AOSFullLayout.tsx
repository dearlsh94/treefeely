import { css } from '@emotion/react'

interface AOSFullLayoutProps {
  type?: 'fade-down' | 'fade-right' | 'flip-up'
  align?: 'flex-start' | 'center' | 'flex-end'
  children: React.ReactNode
}

export default function AOSFullLayout({ type = 'fade-down', align = 'center', children }: AOSFullLayoutProps) {
  return (
    <div
      data-aos={type}
      css={css`
        width: 90vw;
        max-width: 1024px;
        clear: both;
        min-height: 120px;
        background: #fff;
        border-radius: 8px;
        margin: 12vh 0;
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
