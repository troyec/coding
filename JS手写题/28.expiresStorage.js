const storage = {
  prefix: 'storage_', // 前缀
  timeSign: '_expires', // 时间戳后缀,方便切分时间
  setItem(key, value, time) {
    // 做一个key的保护
    key = `${this.prefix}${key}`
    // 没有传入时间，默认过期时间是一个月，当然也可以是其他时间或者不设置（过期时间）
    time ? time : new Date().getTime() + 30 * 24 * 60 * 60 * 1000
    window.localStorage.setItem(key, `${time}${this.timeSign}}${JSON.stringify(value)}`)
  },
  getItem(key) {
    key = `${this.prefix}${key}`
    let value = window.localStorage.getItem(key)
    if (value) {
      let index = value.indexOf(this.timeSign)
      let time = +value.slice(0, index)
      // 判断是否过期
      if (new Date().getTime() - time > 0) {
        window.localStorage.removeItem(key)
        return null
      } else {
        return JSON.parse(value.slice(index + this.timeSign.length))
      }
    }
    return value
  },
  removeItem(key) {
    key = `${this.prefix}${key}`
    window.localStorage.removeItem(key)
  },
  clear() {
    window.localStorage.clear()
  }
}


