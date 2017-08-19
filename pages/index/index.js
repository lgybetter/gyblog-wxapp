const { getPosts } = require('../../apis/posts')
//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {},
    posts: {
      list: [],
      count: 0
    }
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onLoad: function (options) {
    //调用应用实例的方法获取全局数据
    app.getUserInfo(userInfo => {
      //更新数据
      this.setData({
        userInfo:userInfo
      })
    })
    getPosts({}, res => {
      this.setData({
        posts: {
          list: res.data.objects,
          count: res.data.count
        }
      })
      console.log(this.data.posts)
    })
  }
})
