import { forwardRef, HTMLAttributes } from 'react'
import { CSSObject, jsx } from '@emotion/react'
import { justifyContents, JustifyContentsValue, alignItems, AlignItemsValue } from './constants'

export type GridViewProps = HTMLAttributes<HTMLDivElement> & {
  rows?: number
  cols?: number
  rowGap?: number
  colGap?: number
  justifyContent?: JustifyContentsValue
  alignItem?: AlignItemsValue
  fill?: boolean
}

export default forwardRef<HTMLDivElement, GridViewProps>(
  (
    {
      rows = 1,
      cols = 1,
      rowGap = 4,
      colGap = 4,
      justifyContent = justifyContents.center,
      alignItem = alignItems.center,
      fill = false,
      ...props
    }: GridViewProps,
    ref
  ) => {
    const css: CSSObject = {
      display: `grid`,
      gridTemplateRows: `${rows}`,
      gridTemplateColumns: `${cols}`,
      rowGap: `${rowGap}px`,
      columnGap: `${colGap}px`,
      justifyContent,
      alignItem,
      ...(fill && { flex: 1 }),
    }

    return jsx(`div`, { css, ref, ...props })
  }
)
