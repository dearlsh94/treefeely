import { HTMLAttributes } from 'react'
import { css } from '@emotion/react'

interface LinkerProps extends HTMLAttributes<HTMLAnchorElement> {
  url: string
  isBlank?: boolean
  children: React.ReactNode
}
export default function Linker({ url, isBlank, children, ...rest }: LinkerProps) {
  return (
    <a
      href={url}
      {...rest}
      target={isBlank ? '_blank' : '_self'}
      rel="noopener noreferrer"
      css={css`
        text-decoration: none;
        transition: all 0.3s;
        @media (hover: hover) {
          &:hover {
            transform: translateY(-5px);
          }
        }
      `}
    >
      {children}
    </a>
  )
}
