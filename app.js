//app.js
App({
  onLaunch (options) {
    try {
      let user = wx.getStorageSync('token')
      if(!user) {
        wx.redirectTo({
          url: 'pages/auth/signIn/signIn'
        })
      }
    } catch (err) {
      console.log(err)      
    }
  },
  onShow (options) {
  },

  onHide (options) {
  },

  onError (msg) {
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
