import mobileApi from "../../api/mobile";
import { storeBehavior } from "../../behavior/storeBehavior";
import { appStore } from "../../store/index";

// pages/me/settings.ts
Page({

  behaviors: [storeBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    mobile: appStore.currentUser?.mobile,
    gender: appStore.currentUser?.gender,
    birthDay: appStore.currentUser?.birthDay,
    loading: false
  },
  onLoad() {
    if (!appStore.currentUser) {
      wx.navigateBack()
    }
    this.setData({
      mobile: appStore.currentUser?.mobile,
      gender: appStore.currentUser?.gender,
      birthDay: appStore.currentUser?.birthDay
    })
  },
  async onMobileChange(event: {detail: {code: string}}) {
    const mobile = await mobileApi.get(event.detail.code)
    this.setData({
      mobile
    })
  },
  onGenderChange(event: {detail: Gender}) {
    this.setData({
      gender: event.detail
    })
  },
  onBirthDayChange(event: {detail: {value: string}}) {
    this.setData({
      birthDay: event.detail.value
    })
  },
  async save() {
    this.setData({
      loading: true
    })
    await appStore.updateCurrentUser({
      mobile: this.data.mobile,
      gender: this.data.gender,
      birthDay: this.data.birthDay
    })
    this.setData({
      loading: false
    })
    wx.showToast({
      title: '保存完成'
    })
  },
  handleLogout() {
    appStore.logout()
    wx.navigateBack()  
  }
})