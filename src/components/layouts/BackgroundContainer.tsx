import { css } from '@emotion/react'

interface BackgroundContainerProps {
  children: React.ReactNode
}

export default function BackgroundContainer({ children }: BackgroundContainerProps) {
  const container = css`
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-color: gray;
  `
  const background = css`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-image: url('/static/images/bg.webp');
    /* background-image: url('/static/images/tree.jpeg'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    /* transform: translate(-50%, -50%); */
  `
  const content = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    width: 90vw;
    max-width: 1024px;
    -webkit-transform: translateZ(1000px);
    transform: translateZ(1000px);
  `
  return (
    <div css={container}>
      <div css={background} />
      <div
        className="logo-bg"
        css={css`
          position: fixed;
          width: 100vw;
          height: 100vh;
          background-image: url(/static/images/tree-512x512.png);
          background-repeat: no-repeat;
          background-size: 128px 128px;
          background-position: center;
        `}
      />
      <div css={content}>{children}</div>
    </div>
  )
}
