import { Store } from "../../api/store";
import { MapMarker } from "../../pages/store/types";

// components/z-store-popup/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    store: {
      // Todo
      type: null,
      value: <Store | null> null,
      observer(value: Store | null) {
        if(value) {
          this.getTabBar().hide()
        } else {
          this.getTabBar().show()
        }
      }
    },
    markers: {
      type: Array,
      value: <MapMarker[]> []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },


  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.triggerEvent('close')
    },
    goToMenu() {
      wx.navigateTo({
        url: '/pages/store/menu'
      })
    }
    },
    
})
