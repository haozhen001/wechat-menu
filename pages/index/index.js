// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
      imgUrls: [
        '/resource/asserts/swiper-1.png',
        '/resource/asserts/swiper-2.png',
        '/resource/asserts/swiper-3.png'
      ],
      btnImages:[
        '/resource/image/tuijian.png',
        '/resource/image/caipu.png',
        '/resource/image/paihang.png',
        '/resource/image/huodong.png',
      ],btnTexts: [
      '推荐',
      '菜谱',
      '排行',
      '活动',
    ],funcs:[
      {
        id:1,
        name:'猜你喜欢',
          icon:'/resource/image/tuijian.png',
      },
        {
          id: 2,
          name: '我的关注',
          icon: '/resource/image/tuijian.png',
        }
    ],
    marks:[
      '烹饪小技巧',
      '你的家乡过年在吃什么',
      '饮食养生','美容养颜茶','下午茶'
    ], cates: [{ cateid: '', catename: '', userid: '', username: '', userhead: '', score: 4 }, 
    { cateid: '', catename: '', userid: '', username: '', userhead: '', score: 4 }, 
    { cateid: '', catename: '', userid: '', username: '', userhead: '', score: 4 }, { cateid: '', catename: '', userid: '', username: '', userhead: '', score: 4 }],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
          this.getTabBar().setData({
            selected: 0
          })
      }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
})