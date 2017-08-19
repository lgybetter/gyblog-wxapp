const { commonUrl } = require('../config.dev')

exports.signIn = (params, success, error) => {
  wx.request({
    url: `${commonUrl}/user/?email=${params.email}&password=${params.password}`,
    success: res => {
      success && success(res)
    },
    fail: err => {
      error && error(err)
    }
  })
}