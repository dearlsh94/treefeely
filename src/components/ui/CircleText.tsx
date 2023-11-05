import { css, keyframes } from '@emotion/react'

interface CircleTextProps {
  size?: string
  text: string
}

const CircleText = ({ size, text }: CircleTextProps) => {
  const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `
  return (
    <svg
      id="circle-text"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      css={css`
        width: 66%;
        height: auto;
        fill: currentColor;
        transform: rotate(360deg);
        transform-origin: center;
        animation: ${rotate} 6s linear infinite;
      `}
    >
      <defs>
        <path
          id="circle"
          d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
        />
      </defs>
      <text fontSize="13.2">
        <textPath xlinkHref="#circle">{text}</textPath>
      </text>
    </svg>
  )
}

export default CircleText
