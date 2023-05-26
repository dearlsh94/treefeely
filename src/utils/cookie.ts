class Cookies {
  cookie = ''
  data: any = {}
  init() {
    if (process.browser) {
      this.cookie = document.cookie
      this.toData()
      return this
    }
  }
  toData() {
    if (this.cookie.length > 0) {
      this.data = this.cookie.split('; ').reduce((result: any, cookie) => {
        const [name, value] = cookie.split('=')
        result[name] = value
        return result
      }, {})
    }
    return this
  }
  getCookie(name: string) {
    return this.data[name]
  }
  setCookie(name: string, value: any, day = 1) {
    let date = new Date()
    date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000)
    date.setHours(0, 0, 0, 0)

    let expires = 'expires=' + date.toUTCString()
    document.cookie = name + '=' + value + '; ' + expires + '; path=/'
    this.init()
    return this
  }
  deleteCookie(name: string) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
    return this
  }
}
let cookieUtil: any = null
function createCookie() {
  cookieUtil = new Cookies()
}
createCookie()

export default cookieUtil
