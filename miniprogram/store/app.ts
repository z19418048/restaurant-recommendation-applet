import { action, observable } from "mobx-miniprogram";
import tokenApi from "../api/token";
const STORAGE_KEY = 'token'
export const appStore = observable({
  token:wx.getStorageSync(STORAGE_KEY),
  login:action(async function(event:{detail:{code:string}}){
    // 调用接口
    const token = await tokenApi.create(event.detail.code)
    appStore.setToken(token)
    wx.showToast({
      title:'登录成功',
      icon:'success'
    })
    getCurrentPages().pop() ? wx.navigateBack() : wx.switchTab({
      url:'/pages/index/index'
    })
  }),
  setToken:action(function(token:string){
    appStore.token = token
    wx.setStorageSync(STORAGE_KEY,token)
  })
})