Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/image/index2.png",
      selectedIconPath: "/image/index.png",
      text: "首页"
    }, {
      pagePath: "/pages/person/person",
      iconPath: "/image/geren2.png",
      selectedIconPath: "/image/geren.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(data.index)
      this.setData({
        selected: data.index
      },function(){
        wx.switchTab({ url })
      })
    }
  }
})