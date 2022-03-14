const startAt = Date.now()
let count = 0

export default () => ({
  pageview: count++,
  startAt,
  uptime: Date.now() - startAt,
})
