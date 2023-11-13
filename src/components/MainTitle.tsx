import { css } from '@emotion/react'
import CircleText from './ui/CircleText'

export default function MainTitle() {
  const cssMainTitle = css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
  return (
    <div css={cssMainTitle}>
      <CircleText size={512} text="TREEFEELY" />
    </div>
  )
}
