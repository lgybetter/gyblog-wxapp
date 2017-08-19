const { signIn } = require('../../../apis/auth')

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
    signIn({
      email: this.data.user.email,
      password: this.data.user.password
    }, res => {
      if(res.data.code === 200) {
        wx.setStorageSync('token', res.data.token)
        wx.setStorageSync('user', res.data.data)
        wx.redirectTo({
          url: '/pages/index/index'
        })
      } else {
        console.log(res.data.msg)
      }
    }, err => {
      console.log(err)
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