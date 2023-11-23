import { HTMLAttributes, LabelHTMLAttributes } from 'react'
import { CSSObject, jsx, SerializedStyles } from '@emotion/react'
import { fontSizes, FontSizesValue, fontWeights, FontWeightValue, clamps, ClampsValue } from './constants'

export type TextProps = (HTMLAttributes<HTMLSpanElement> | LabelHTMLAttributes<HTMLLabelElement>) & {
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
  css?: SerializedStyles
}

export default function Text({
  color,
  lineHeight = 1.2,
  spacing = 1,
  fontSize = fontSizes.normal,
  fontWeight = fontWeights.w400,
  textAlign = 'left',
  fill,
  noDrag,
  underline = false,
  clamp = clamps.none,
  ...props
}: TextProps) {
  const css: CSSObject = {
    backgroundColor: `unset`,
    // color: color,
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

  return jsx(`span`, { css, ...props })
}
