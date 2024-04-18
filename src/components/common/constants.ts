export type FlexAlign =
  | 'start-start'
  | 'start-center'
  | 'start-end'
  | 'center-start'
  | 'center-center'
  | 'center-end'
  | 'end-start'
  | 'end-center'
  | 'end-end'
  | 'between-start'
  | 'between-center'
  | 'between-end'
  | 'around-start'
  | 'around-center'
  | 'around-end'

export const fontSizes = Object.freeze({
  xxSmall: '0.25rem',
  xSmall: '0.5rem',
  small: '0.75rem',
  normal: '1rem',
  large: '1.25rem',
  xLarge: '1.5rem',
  xxLarge: '1.75rem',
  xxxLarge: '2rem',
  h1: '4rem',
  h2: '3rem',
  h3: '2.5rem',
})
export type FontSizesValue = (typeof fontSizes)[keyof typeof fontSizes]

export const fontWeights = Object.freeze({
  w100: 100,
  w200: 200,
  w300: 300,
  w400: 400,
  w500: 500,
  w600: 600,
  w700: 700,
  w800: 800,
  w900: 900,
})
export type FontWeightValue = (typeof fontWeights)[keyof typeof fontWeights]

export const clamps = Object.freeze({
  none: {},
  single: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  } as const,
  multi: {
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
  } as const,
})
export type ClampsValue = (typeof clamps)[keyof typeof clamps]
