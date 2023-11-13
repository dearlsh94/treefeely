import { HTMLAttributes, LabelHTMLAttributes } from 'react'
import { CSSObject, jsx } from '@emotion/react'
import { fontSizes, FontSizesValue, fontWeights, FontWeightValue, clamps, ClampsValue } from './constants'

export type Head1Props = (HTMLAttributes<HTMLSpanElement> | LabelHTMLAttributes<HTMLLabelElement>) & {
  color?: string
  lineHeight?: number
  spacing?: number
  fontSize?: FontSizesValue
  fontWeight?: FontWeightValue
  textAlign?: 'left' | 'center' | 'right'
  fill?: boolean
  noDrag?: boolean
  underline?: boolean
  clamp?: ClampsValue
}

export default ({
  color = 'black',
  lineHeight = 1.5,
  spacing = 1,
  fontSize = fontSizes.xxxLarge,
  fontWeight = fontWeights.w800,
  textAlign = 'center',
  fill,
  noDrag,
  underline = false,
  clamp = clamps.none,
  ...props
}: Head1Props) => {
  const css: CSSObject = {
    backgroundColor: `unset`,
    color: color,
    lineHeight: lineHeight,
    letterSpacing: `${spacing}px`,
    fontSize: fontSize,
    fontWeight: fontWeight,
    textAlign: textAlign,
    ...(fill && { flex: 1 }),
    ...(noDrag && { userSelect: `none` }),
    ...(underline && {
      textDecoration: `underline`,
      textUnderlinePosition: `under`,
    }),
    ...clamp,
  }

  return jsx(`h1`, { css, ...props })
}
