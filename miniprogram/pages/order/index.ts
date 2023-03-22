// pages/store/index.ts
Page({
  data:{
    paddingTop: 0,
    orderList:[
      {name:"全部"},
      {name:"历史"},
      {name:"退单"}
    ]
  },
  onShow() {
    this.getTabBar().init()
  },
  onLoad(){
    const { bottom } = wx.getMenuButtonBoundingClientRect()
    this.setData({
      paddingTop: bottom
    })
  },
  goToStore(){
    wx.switchTab({url: '/pages/store/index'})
  }
})