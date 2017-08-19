const { commonUrl } = require('../../../config.dev')

Page({
  data: {
    user: {
      email: '',
      password: ''
    }
  },
  signIn() {
    if(!this.data.user.email) {
      console.log('请输入邮箱地址')
      return
    }
    if(!this.data.user.password) {
      console.log('请输入密码')
      return
    }
    wx.request({
      url: `${commonUrl}/user/?email=${this.data.user.email}&password=${this.data.user.password}`,
      success: function (res) {
        if(res.data.code === 200) {
          wx.setStorageSync('user', res.data.data)
          wx.redirectTo({
            url: '/pages/index/index'
          })
        } else {
          console.log(res.data.msg)
        }
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  handleInputEmail (event) {
    this.setData({
      'user.email': event.detail.value
    })
  },
  handleInputPassword (event) {
    this.setData({
      'user.password': event.detail.value
    })
  }
})