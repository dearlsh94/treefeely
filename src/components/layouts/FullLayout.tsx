import { css } from '@emotion/react'

interface FullLayoutProps {
  children: React.ReactNode
}

export default function FullLayout({ children }: FullLayoutProps) {
  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {children}
    </div>
  )
}
