export const throttle = (callback: Function, duration: number) => {
  let timer: NodeJS.Timeout
  let lstTime: number
  return () => {
    const context = this
    if (!lstTime) {
      callback.apply(context)
      lstTime = Date.now()
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        if (Date.now() - lstTime >= duration) {
          callback.apply(context)
          lstTime = Date.now()
        }
      }, duration - (Date.now() - lstTime))
    }
  }
}

export const debounce = (callback: Function, duration: number, immediate = false) => {
  let timeout: NodeJS.Timeout
  return () => {
    let context = this
    let later = () => {
      timeout = null
      if (!immediate) callback.apply(context)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, duration)
    if (callNow) callback.apply(context)
  }
}
