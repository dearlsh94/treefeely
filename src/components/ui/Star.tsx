export interface IStar {
  positionTop: string
  positionLeft: string
  size: number
  color?: string
  className?: string
}

const Star = ({ positionTop, positionLeft, size, color, className }: IStar) => {
  return (
    <div
      className={`star ${className}`}
      style={{
        top: positionTop,
        left: positionLeft,
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: `0px 0px ${size * 1.5}px #fff`,
        backgroundColor: `${color || '#fff'}`,
      }}
    />
  )
}

export default Star
