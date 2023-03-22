import localStoreApi from "../../api/localStore"
import storeApi from "../../api/store"

// pages/store/menu.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: <CategoryWithProduct[]>[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    const menuList = await storeApi.menu('11')
    const recommend = await localStoreApi.localMenu(1)
    const dish = await localStoreApi.localMenu(2)
    const vegetable = await localStoreApi.localMenu(3)
    const principle = await localStoreApi.localMenu(4)
    const rice = await localStoreApi.localMenu(5)
    const recommendRes = recommend.resultObject
    const dishRes = dish.resultObject
    const vegetableRes = vegetable.resultObject
    const principleRes = principle.resultObject
    const riceRes = rice.resultObject
    const localMenuList = [
      {icon:"/assets/images/zlong.jpg",id:1,name:"推荐",products:recommendRes},
      {icon:"/assets/images/zlong.jpg",id:2,name:"炒菜",products:dishRes},
      {icon:"/assets/images/zlong.jpg",id:3,name:"蔬菜",products:vegetableRes},
      {icon:"/assets/images/zlong.jpg",id:4,name:"主食",products:principleRes},
      {icon:"/assets/images/zlong.jpg",id:5,name:"米饭",products:riceRes}
    ]
    this.setData({
      menuList,
      localMenuList
    })
  },
  goToStoreIndex(){
    wx.switchTab({url: '/pages/store/index'})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})