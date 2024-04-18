import { forwardRef, HTMLAttributes } from 'react'
import { CSSObject, jsx, SerializedStyles } from '@emotion/react'
import { FlexAlign } from './constants'

export type FlexViewProps = HTMLAttributes<HTMLDivElement> & {
  direction?: 'row' | 'column'
  align?: FlexAlign
  width?: number | 'fit' | 'fill'
  flex?: number
  colGap?: number
  rowGap?: number
  css?: SerializedStyles
  wrap?: boolean
}

export default forwardRef<HTMLDivElement, FlexViewProps>(
  (
    {
      direction = 'row',
      align = 'center-center',
      width = 'fit',
      flex = 0,
      colGap = 0,
      rowGap = 0,
      wrap = false,
      ...props
    }: FlexViewProps,
    ref
  ) => {
    const [justify, items] = align.split('-')
    const justifyContent =
      justify === 'between'
        ? 'space-between'
        : justify === 'around'
        ? 'space-around'
        : justify === 'start'
        ? 'flex-start'
        : justify === 'end'
        ? 'flex-end'
        : 'center'
    const alignItem =
      items === 'start' ? 'flex-start' : items === 'end' ? 'flex-end' : items === 'center' ? 'center' : 'stretch'

    const css: CSSObject = {
      display: `flex`,
      flexDirection: direction === 'row' ? 'row' : 'column',
      justifyContent: justifyContent,
      alignItems: alignItem,
      width: width === 'fit' ? 'fit-content' : width === 'fill' ? '100%' : `${width}`,
      flex: flex,
      columnGap: `${colGap}px`,
      rowGap: `${rowGap}px`,
      flexWrap: wrap ? 'wrap' : 'nowrap',
    }

    return jsx(`div`, { css, ref, ...props })
  }
)
