import { css } from '@emotion/react'
import Head1 from '@/components/common/Head1'

interface Head1DividerProps {
  title: string
}
export default function Head1Divider({ title }: Head1DividerProps) {
  return (
    <Head1
      noDrag
      css={css`
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 24px;
        word-break: break-all;
        &::before,
        &::after {
          flex: 1;
          height: 4px;
          background-color: var(--color-mono);
          border-color: rgba(249, 249, 249, 1);
          content: '';
        }
      `}
    >
      {title}
    </Head1>
  )
}
