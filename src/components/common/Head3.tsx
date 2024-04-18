import { HTMLAttributes, LabelHTMLAttributes } from 'react'
import { CSSObject, jsx } from '@emotion/react'
import { fontSizes, FontSizesValue, fontWeights, FontWeightValue, clamps, ClampsValue } from './constants'

export type Head3Props = (HTMLAttributes<HTMLSpanElement> | LabelHTMLAttributes<HTMLLabelElement>) & {
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

export default function Head3({
  lineHeight = 1.2,
  spacing = 1,
  fontSize = fontSizes.xLarge,
  fontWeight = fontWeights.w600,
  textAlign = 'center',
  fill,
  noDrag,
  underline = false,
  clamp = clamps.none,
  ...props
}: Head3Props) {
  const css: CSSObject = {
    backgroundColor: `unset`,
    color: `var(--color-font)`,
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

  return jsx(`h3`, { css, ...props })
}
