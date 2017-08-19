const { authUrl } = require('../config.dev')

exports.getPosts = (params, success, error) => {
  wx.request({
    url: `${authUrl}/post`,
    header: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${wx.getStorageSync('token')}`
    },
    success: res => {
      success && success(res)
    },
    fail: err => {
      error && error(err)
    }
  })
}