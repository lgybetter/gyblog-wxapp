const { getPosts } = require('../../apis/post')
const { formatTime } = require('../../utils/util')
//获取应用实例
const app = getApp()
Page({
  data: {
    heightStyle: '',
    userInfo: {},
    posts: {
      list: [],
      count: 0
    }
  },
  //事件处理函数
  toPostPage (event) {
    wx.navigateTo({
      url: `/pages/post/post?id=${event.currentTarget.dataset.id}`
    })
  },
  onLoad (options) {
    this.setData({
      heightStyle: `height: ${wx.getSystemInfoSync().windowHeight - 16}px;`
    })
  },
  onShow () {
    //调用应用实例的方法获取全局数据
    app.getUserInfo(userInfo => {
      //更新数据
      this.setData({
        userInfo:userInfo
      })
    })
    getPosts({}, res => {
      res.data.objects.map(post => {
        post.date = formatTime(new Date(post.date))
        return post
      })
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
