export interface IStar {
  positionTop: string
  positionLeft: string
  size: number
  color?: string
  className?: string
  twinkleDuration?: number
  moveX?: number
  moveY?: number
}

const Star = ({ positionTop, positionLeft, size, color, className, twinkleDuration, moveX, moveY }: IStar) => {
  return (
    <div
      className={`star ${className}`}
      style={{
        top: moveY || positionTop,
        left: moveX || positionLeft,
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: `0px 0px ${size * 1.5}px #fff`,
        backgroundColor: `${color || '#fff'}`,
        animationDuration: `${twinkleDuration > 0 ? twinkleDuration : 1}s`,
      }}
    />
  )
}

export default Star
