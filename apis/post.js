const { authUrl } = require('../config.dev')

exports.getPosts = (params, success, error) => {
  // wx.request({
  //   url: `${authUrl}/post`,
  //   header: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${wx.getStorageSync('token')}`
  //   },
  //   success: res => {
  //     success && success(res)
  //   },
  //   fail: err => {
  //     error && error(err)
  //   }
  // })
  success({
    data: {
      objects: [{
        id: 0,
        date: 1551451221172,
        createBy: {
          name: '机器之能',
          icon: 'http://pic36.photophoto.cn/20150811/0005018383375520_b.jpg'
        },
        title: '5G商用前夜，芯片厂、运营商、设备方共下一盘大棋',
        subTitle: '5G蓄势待发，利益链条和玩家版图越发清晰。',
        icon: 'https://img.36krcdn.com/20190228/v2_1551329737838_img_000'
      }, {
        id: 1,
        date: 1551451211172,
        createBy: {
          name: '秋雨',
          icon: 'http://img0.imgtn.bdimg.com/it/u=1599767659,4148725539&fm=26&gp=0.jpg'
        },
        title: '想在楼市长远布局，先搞清楚谁才是我国第一大城市经济体',
        subTitle: '对于看重楼市战略布局，倾向长远投资的人来说，这场较量的答案显然非常重要。',
        icon: 'https://pic.36krcnd.com/201903/01063730/sr7zvm72new2zax5!feature'
      }, {
        id: 0,
        date: 1550451221172,
        createBy: {
          name: '昊明',
          icon: 'http://s10.sinaimg.cn/bmiddle/0022Ad1dgy6I1sDfRNL99&690'
        },
        title: 'Elon Musk 开枪，你躲得掉吗？',
        subTitle: '这次大更新对特斯拉意味着什么，对行业又意味着什么',
        icon: 'https://img.36krcdn.com/20190301/v2_1551429595428_img_000'
      }, {
        id: 0,
        date: 1551251221172,
        createBy: {
          name: '机器之能',
          icon: 'http://pic39.photophoto.cn/20160623/0017030559571743_b.jpg'
        },
        title: '首富，人设全崩了',
        subTitle: '硅兔赛跑 • 10小时前 • 大公司2018年，我们似乎时常处在对未来、对未知的恐慌中。我能保住工作吗？我能加薪升职发财吗？我能拥有绝美的爱情吗',
        icon: 'https://img.36krcdn.com/20190301/v2_1551411820751_img_000'
      }, {
        id: 0,
        date: 1552451211172,
        createBy: {
          name: '夏天',
          icon: 'http://hbimg.b0.upaiyun.com/6ec17963d63cc34d3b0e027f7574139388b054633249f-E7H8kP_fw658'
        },
        title: '从科技的本质看中长期的投资逻辑',
        subTitle: '科技革命的渗透路径从产业领域到个人生活领域交替轮回，其渗透路径先2B到2C，然后再2B，交替轮回式推动经济发展。',
        icon: 'https://pic.36krcnd.com/201902/19011419/xnysnmks7dag1get.png!1200'
      }],
      count: 5
    }
  })
}

exports.getPost = (params, success, error) => {
  // wx.request({
  //   url: `${authUrl}/post/${params.id}`,
  //   header: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${wx.getStorageSync('token')}`
  //   },
  //   success: res => {
  //     success && success(res)
  //   },
  //   fail: err => {
  //     error && error(err)
  //   }
  // })
  success({
    data: {
      content: `## 为什么要使用TypeScript

      ### 侦测错误
      
      通过静态类型检测可以尽早检测出程序中隐藏的的逻辑错误，对于JavaScript动态的弱类型语言，虽然灵活性高，但是对于初学者来说，如果不熟悉JavaScript内部的语言机制，很容易造成隐藏的事故。但是通过TypeScript的静态类型检测可以规避这些问题，因为其能够约束变量产生的类型。结合IDE编辑器可以推导变量对应的类型以及内部的结构，提高代码的健壮性和可维护性。
      
      ### 抽象
      
      类型系统能够强化规范编程，TypeScript提供定义接口。在开发大型复杂的应用软件时十分重要，一个系统模块可以抽象的看做一个TypeScript定义的接口。让设计脱离实现，最终体现出一种 IDL（接口定义语言，Interface Define Language），让程序设计回归本质。
      
      ### 文档
      
      TypeScript可以自动根据类型标注生成文档，对于简单的功能实现都不需要编写注释。
      
      ## 为什么要使用Mobx
      
      ### MobX 和 Redux 的比较
      
      先要明白 mobx 和 redux 的定位是不同的。redux 管理的是 (STORE -> VIEW -> ACTION) 的整个闭环，而 mobx 只关心 STORE -> VIEW 的部分。
      
      Redux优缺点：
      
      - 数据流流动很自然，因为任何 dispatch 都会触发广播，依据对象引用是否变化来控制更新粒度。
      
      - 通过充分利用时间回溯的特征，可以增强业务的可预测性与错误定位能力。
      
      - 时间回溯代价高，因为每次都要更新引用，除非增加代码复杂度，或使用 immutable。
      
      - 时间回溯的另一个代价是 action 与 reducer 完全脱节，原因是可回溯必然不能保证引用关系。
      
      - 引入中间件，解决异步带来的副作用，业务逻辑或多或少参杂着 magic。
      
      - 灵活利用中间件，可以通过约定完成许多复杂的工作。
      
      - 对 typescript 支持困难。
      
      Mobx优缺点：
      
      - 数据流流动不自然，只有用到的数据才会引发绑定，局部精确更新，但避免了粒度控制烦恼。
      
      - 没有时间回溯能力，因为数据只有一份引用。自始至终一份引用，不需要 immutable，也没有复制对象的额外开销。
      
      - 数据流动由函数调用一气呵成，便于调试。
      
      - 业务开发不是脑力活，而是体力活，少一些 magic，多一些效率。
      
      - 由于没有 magic，所以没有中间件机制，没法通过 magic 加快工作效率（这里 magic 是指 action 分发到 reducer 的过程）。
      
      - 完美支持 typescript。
      
      SO: 前端数据流不太复杂的情况，使用 Mobx，因为更加清晰，也便于维护；如果前端数据流极度复杂，建议谨慎使用 Redux，通过中间件减缓巨大业务复杂度`
    }
  })
}