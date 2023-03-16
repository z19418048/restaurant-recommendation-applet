// pages/store/index.ts
Page({
  data:{
    paddingTop: 0,
  },
  onShow() {
    this.getTabBar().init()
  },
  onLoad(){
    const { bottom } = wx.getMenuButtonBoundingClientRect()
    this.setData({
      paddingTop: bottom
    })
  }
})