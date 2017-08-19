const { commonUrl } = require('../config.dev')

exports.signIn = (params, success, error) => {
  wx.request({
    url: `${commonUrl}/user/?email=${params.email}&password=${params.password}`,
    success: success,
    fail: error
  })
}