import { css } from '@emotion/react'

interface AOSFullGlassCardLayoutProps {
  type?: 'fade-down' | 'fade-up' | 'flip-up'
  align?: 'flex-start' | 'center' | 'flex-end'
  mt?: number
  children: React.ReactNode
}

export default function AOSFullGlassCardLayout({
  type = 'fade-up',
  align = 'center',
  mt = 6,
  children,
}: AOSFullGlassCardLayoutProps) {
  return (
    <div
      data-aos={type}
      css={css`
        width: 90vw;
        max-width: 1024px;
        clear: both;
        min-height: 120px;
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        border-radius: 8px;
        margin: ${`${mt}vh 0`};
        padding: 16px 12px;
        display: flex;
        justify-content: center;
        align-items: ${align};
        flex-direction: column;
        row-gap: 8px;
        box-sizing: border-box;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.35);
        -webkit-box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.35);
        -moz-box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.35);
      `}
    >
      {children}
    </div>
  )
}
