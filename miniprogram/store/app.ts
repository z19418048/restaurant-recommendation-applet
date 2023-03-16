import { action, observable } from "mobx-miniprogram";
import tokenApi from "../api/token";
import userApi from "../api/user";
const TOKEN_STORAGE_KEY = 'token'
const CURRENT_USER_STORAGE_KEY = 'current-user'
export const appStore = observable({
  token: <string>wx.getStorageSync(TOKEN_STORAGE_KEY),
  currentUser: <UserType | null> wx.getStorageSync(CURRENT_USER_STORAGE_KEY) || null,
  activeTabbar: 0,
  login: action(async function (event: {detail: {code: string}}) {
    const token = await tokenApi.create(event.detail.code)
    appStore.setToken(token)
    appStore.fetchCurrentUser()
    wx.showToast({
      title: '登录成功',
      icon: 'success'
    })
    getCurrentPages().pop() ? wx.navigateBack() : wx.switchTab({
      url: '/pages/index/index'
    })
  }),
  setToken: action(function(token: string) {
    appStore.token = token
    wx.setStorageSync(TOKEN_STORAGE_KEY, token)
  }),
  fetchCurrentUser: action(async function() {
    const currentUser = await userApi.current()
    appStore.setCurrentUser(currentUser)
  }),
  setCurrentUser: action(function(currentUser: UserType) {
    appStore.currentUser = currentUser
    wx.setStorageSync(CURRENT_USER_STORAGE_KEY, currentUser)
  }),
  logout: action(function() {
    appStore.token = ''
    appStore.currentUser = null
    wx.setStorageSync(TOKEN_STORAGE_KEY, '')
    wx.setStorageSync(CURRENT_USER_STORAGE_KEY, null)
  }),
  switchTabbar: action(function(value: number) {
    appStore.activeTabbar = value
  }),
  updateCurrentUser: action(async function(userUpdateRequest: UserUpdateRequest) {
    const updatedUser = await userApi.updateCurrent(userUpdateRequest)
    appStore.setCurrentUser(updatedUser)
  })
})