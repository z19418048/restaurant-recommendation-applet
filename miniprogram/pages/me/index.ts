import { storeBehavior } from "../../behavior/storeBehavior"
import { appStore } from "../../store/index";

Page({
  behaviors: [storeBehavior],
  data: {
    paddingTop: 0,
    menuList: [
      {
        title: '兑换码',
        icon: 'qr'
      },
      {
        title: '隐私协议',
        icon: 'shield-o'
      },      {
        title: '用户服务协议',
        icon: 'records'
      },
      {
        title: '经营信息公示',
        icon: 'notes-o'
      }
    ]
  },
  onLoad() {
    const { bottom } = wx.getMenuButtonBoundingClientRect()
    this.setData({
      paddingTop: bottom
    })
  },
  goToSettings() {
    if (appStore.currentUser) {
      wx.navigateTo({url: '/pages/me/settings'})

    }
  },
  goToLogin() {
    wx.navigateTo({url: '/pages/login/index'})
  }
})