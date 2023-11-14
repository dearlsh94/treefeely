import { css } from '@emotion/react'

interface AOSHalfLayoutProps {
  type?: 'flip-left' | 'flip-right'
  align?: 'flex-start' | 'center' | 'flex-end'
  children: React.ReactNode
  link?: {
    url: string
    ariaLabel: string
  }
}

export default function AOSHalfLayout({ type = 'flip-left', align = 'center', children, link }: AOSHalfLayoutProps) {
  const render = (
    <div
      data-aos={type}
      css={css`
        width: ${link ? '100%' : '50%'};
        max-width: 512px;
        clear: both;
        height: 120px;
        background: #fff;
        border-radius: 8px;
        padding: 12px 8px;
        display: flex;
        justify-content: center;
        align-items: ${align};
        flex-direction: column;
        row-gap: 8px;
        box-sizing: border-box;
        box-shadow: ${`${type === 'flip-left' ? '-8px' : '8px'} 8px 12px 0px rgba(0, 0, 0, 0.65)`};
        -webkit-box-shadow: ${`${type === 'flip-left' ? '-8px' : '8px'} 8px 12px 0px rgba(0, 0, 0, 0.65)`};
        -moz-box-shadow: ${`${type === 'flip-left' ? '-8px' : '8px'} 8px 12px 0px rgba(0, 0, 0, 0.65)`};
      `}
    >
      {children}
    </div>
  )

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: ${type === 'flip-left' ? 'flex-start' : 'flex-end'};
        margin: 4vh 0;
      `}
    >
      {link ? (
        <a
          href={link.url}
          target="_blank"
          aria-label={link.ariaLabel}
          css={css`
            width: 50%;
            display: flex;
            justify-content: center;
          `}
        >
          {render}
        </a>
      ) : (
        render
      )}
    </div>
  )
}
