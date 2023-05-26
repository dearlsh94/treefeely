export const timeDifferentToday = (value: string) => {
  const today = new Date()
  const timeValue = new Date(value)

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60)
  if (betweenTime < 1) return '방금전'
  if (betweenTime < 60) {
    return `${betweenTime}분 전`
  }

  const betweenTimeHour = Math.floor(betweenTime / 60)
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 전`
  }

  return value.substring(0, 10)
}
