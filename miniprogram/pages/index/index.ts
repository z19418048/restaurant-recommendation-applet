import pageApi from "../../api/page"
import navigator from "../../utils/navigator"
import { storeBehavior } from "../../behavior/storeBehavior"

// pages/index/index.ts
Page({
  behaviors: [storeBehavior],

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:<SwiperData[]> [],
    iconNavigations: <IconNavigation[]>[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    const { swiper, iconNavigations } =  await pageApi.home()
    this.setData({
      swiperList: swiper,
      iconNavigations: iconNavigations
    })
  },

  onIconNavigationTap(event: ItemParam) {
    const { type, target } = event.currentTarget.dataset.item
    navigator.to(type, target)
  },
  goToLogin() {
    wx.navigateTo({url: '/pages/login/index'})
  },
  goToStore() {
    wx.switchTab({url: '/pages/store/index'})
  }
})