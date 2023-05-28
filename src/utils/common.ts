/**
 * 대비 글자색 추출
 * @param hexColor #000000
 * @return #fff or #000
 */
export const getTextColorByBackgroundColor = (hexColor: string) => {
  const c = hexColor.substring(1) // 색상 앞의 # 제거
  const rgb = parseInt(c, 16) // rrggbb를 10진수로 변환
  const r = (rgb >> 16) & 0xff // red 추출
  const g = (rgb >> 8) & 0xff // green 추출
  const b = (rgb >> 0) & 0xff // blue 추출
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709
  // 색상 선택
  return luma < 127.5 ? '#fff' : '#000'
}

/**
 * min을 포함하되, max를 포함하지 않는 범위 내의 랜덤한 정수를 추출하는 함수
 * @param min 최소 숫자 (포함)
 * @param max 최대 숫자 (미포함)
 * @returns
 */
export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

/**
 * 짝수인지 판단하는 함수
 * @param num 정수
 * @returns
 */
export const isEvenNumber = (num: number) => {
  return num % 2 === 0
}
