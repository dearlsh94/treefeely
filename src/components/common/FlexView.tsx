import { forwardRef, HTMLAttributes } from 'react'
import { CSSObject, jsx, SerializedStyles } from '@emotion/react'
import { justifyContents, JustifyContentsValue, alignItems, AlignItemsValue } from './constants'

export type FlexViewProps = HTMLAttributes<HTMLDivElement> & {
  center?: boolean
  direction?: 'row' | 'column'
  justifyContent?: JustifyContentsValue
  alignItem?: AlignItemsValue
  width?: number | 'fit' | 'fill'
  flex?: number
  nowrap?: boolean
  colGap?: number
  rowGap?: number
  bgColor?: string
  css?: SerializedStyles
}

export default forwardRef<HTMLDivElement, FlexViewProps>(
  (
    {
      center,
      direction = 'row',
      justifyContent = justifyContents.center,
      alignItem = alignItems.center,
      width = 'fit',
      flex = 1,
      nowrap,
      colGap = 0,
      rowGap = 0,
      bgColor = 'initial',
      ...props
    }: FlexViewProps,
    ref
  ) => {
    const css: CSSObject = {
      display: `flex`,
      flexDirection: direction === 'row' ? 'row' : 'column',
      justifyContent: center ? 'center' : justifyContent,
      alignItems: center ? 'center' : alignItem,
      width: width === 'fit' ? 'fit-content' : width === 'fill' ? '100%' : `${width}px`,
      flex: flex,
      ...(nowrap && { flexWrap: `nowrap` }),
      columnGap: `${colGap}rem`,
      rowGap: `${rowGap}rem`,
      backgroundColor: bgColor,
    }

    return jsx(`div`, { css, ref, ...props })
  }
)
