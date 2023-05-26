interface ICircleText {
  size: string
  text: string
}

const CircleText = ({ size, text }: ICircleText) => {
  return (
    <svg id="circle-text" viewBox="0 0 100 100" width={size} height={size}>
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
