export const justifyContents = {
  start: `flex-start`,
  end: `flex-end`,
  center: `center`,
  between: `space-between`,
  around: `space-around`,
  evenly: `space-evenly`,
};
export type JustifyContentsValue =
  (typeof justifyContents)[keyof typeof justifyContents];

export const alignItems = {
  start: `flex-start`,
  end: `flex-end`,
  center: `center`,
};
export type AlignItemsValue = (typeof alignItems)[keyof typeof alignItems];

export const fontSizes = {
  xxSmall: "0.25rem",
  xSmall: "0.5rem",
  small: "0.75rem",
  normal: "1rem",
  large: "1.25rem",
  xLarge: "1.5rem",
  xxLarge: "1.75rem",
  xxxLarge: "2rem",
};
export type FontSizesValue = (typeof fontSizes)[keyof typeof fontSizes];

export const fontWeights = {
  w100: 100,
  w200: 200,
  w300: 300,
  w400: 400,
  w500: 500,
  w600: 600,
  w700: 700,
  w800: 800,
  w900: 900,
};
export type FontWeightValue = (typeof fontWeights)[keyof typeof fontWeights];

export const clamps = {
  none: {},
  single: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  } as const,
  multi: {
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  } as const,
};
export type ClampsValue = (typeof clamps)[keyof typeof clamps];
