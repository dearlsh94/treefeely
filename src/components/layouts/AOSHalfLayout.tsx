import { css } from '@emotion/react'

interface AOSHalfLayoutProps {
  type?: 'flip-left' | 'flip-right'
  align?: 'flex-start' | 'center' | 'flex-end'
  children: React.ReactNode
}

export default function AOSHalfLayout({ type = 'flip-left', align = 'center', children }: AOSHalfLayoutProps) {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: ${type === 'flip-left' ? 'flex-start' : 'flex-end'};
      `}
    >
      <div
        data-aos={type}
        css={css`
          width: 45vw;
          max-width: 512;
          clear: both;
          height: 120px;
          background: #fff;
          border-radius: 8px;
          margin: 4vh 0;
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
    </div>
  )
}
