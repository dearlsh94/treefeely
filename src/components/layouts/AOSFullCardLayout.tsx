import { css } from '@emotion/react'

interface AOSFullCardLayoutProps {
  type?: 'fade-down' | 'fade-right' | 'flip-up'
  align?: 'flex-start' | 'center' | 'flex-end'
  mt?: number
  isGlassMorphism?: boolean
  children: React.ReactNode
}

export default function AOSFullCardLayout({
  type = 'fade-down',
  align = 'center',
  mt = 6,
  isGlassMorphism = false,
  children,
}: AOSFullCardLayoutProps) {
  return (
    <div
      data-aos={type}
      css={css`
        width: 90vw;
        max-width: 1024px;
        clear: both;
        min-height: 120px;
        ${isGlassMorphism
          ? `backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);`
          : `background: #fff;`}
        border-radius: 8px;
        margin: ${`${mt}vh 0`};
        padding: 16px 12px;
        display: flex;
        justify-content: center;
        align-items: ${align};
        flex-direction: column;
        row-gap: 8px;
        box-sizing: border-box;
        box-shadow: ${`${type === 'fade-right' ? '8px' : '0px'} 8px 12px 0px rgba(0, 0, 0, 0.65)`};
        -webkit-box-shadow: ${`${type === 'fade-right' ? '8px' : '0px'} 8px 12px 0px rgba(0, 0, 0, 0.65)`};
        -moz-box-shadow: ${`${type === 'fade-right' ? '8px' : '0px'} 8px 12px 0px rgba(0, 0, 0, 0.65)`};
      `}
    >
      {children}
    </div>
  )
}
