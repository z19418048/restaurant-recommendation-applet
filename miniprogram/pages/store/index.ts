import storeApi, { Store } from "../../api/store"
import { StoreStatus } from "../../enums/StoreStatus"
import { MapMarker } from "./types"
import QQMapWX from "@jonny1994/qqmap-wx-jssdk";
const mapKey = "5SOBZ-SJDL6-J47SK-MNS4A-OY7J2-4VBKA"
const computedBehavior = require('miniprogram-computed').behavior
// pages/store/index.ts
Page({
  behaviors: [computedBehavior],
  /**
   * 页面的初始数据
   */
  mapSdk: <QQMapWX | null>null,
  data: {
    paging: <Paging>{
      page: 1,
      size: 10
    },
    storeList: <Store[]>[],
    storeStatusDict: StoreStatus,
    currentLocation: <Location>{
      latitude: 0,
      longitude: 0
    },
    markers: <MapMarker[]>[],
    showMap: true,
    selectedStore: <Store | null>null
  },
  computed: {
    markers(data: { storeList: Store[] }): MapMarker[] {
      return data.storeList.map((item, index) => {
        return {
          id: index + 1,
          title: item.name,
          latitude: item.location.latitude,
          longitude: item.location.longitude,
          iconPath: '../../assets/images/logo.JPG',
          width: '55rpx',
          height: '55rpx'
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    this.initMapSdk()
    await this.fetchCurrentLocation()
  },

  initMapSdk() {
    this.mapSdk = new QQMapWX({ key: mapKey });
  },

  async fetchCurrentLocation() {
    const { latitude, longitude } = await wx.getLocation({ type: 'wgs84' })
    this.setData({
      currentLocation: { latitude, longitude }
    })
    this.fetchData()
  },


  async fetchData() {
    const { paging, data } = await storeApi.list(
      {
        ...this.data.paging,
        ...this.data.currentLocation
      }
    )

    data.length && this.calculateDistanceAndSetStoreList(data)

    this.setData({
      paging
    })
  },

  calculateDistanceAndSetStoreList(storeList: Store[]) {
    const locationList: Location[] = storeList.map(item => {
      return item.location
    })

    this.mapSdk?.calculateDistance({
      // @ts-ignore
      from: this.data.currentLocation,
      to: locationList,
      success: (res) => {
        console.log(res)
        storeList.forEach((item, index) => {
          // @ts-ignore
          storeList[index]['distance'] = (res.result.elements[index].distance / 1000).toFixed(2)
        })
        this.setData({
          storeList
        })
      }
    })
  },
  onShow() {
  },
  toggleMap() {
    this.setData({
      showMap: !this.data.showMap
    })
  },
  goToLocation(event: DataSetEvent<{ location: Location }>) {
    const { longitude, latitude } = event.currentTarget.dataset.location
    wx.openLocation({
      longitude, latitude
    })
  },
  callPhone(event: DataSetEvent<{ phone: string }>) {
    wx.makePhoneCall({
      phoneNumber: event.currentTarget.dataset.phone
    })
  },
  goToCurrentLocation() {
    wx.createSelectorQuery().select('#store-map').context(res => {
      res.context.moveToLocation()
    }).exec()
  },
  selectStore(event: DataSetEvent<{ store: Store }>) {
    this.setData({
      selectedStore: event.currentTarget.dataset.store
    })
  },
  handleStorePopupClose() {
    this.setData({
      selectedStore: null
    })
  }
})