import { cartStore } from "../../store/index"

// components/z-store-menu/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menuList: {
      type: Array,
      value: <CategoryWithProduct[]> []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedSectionIndex: 0,
    scrollIntoIndex: 0,
    titleOffsets: <number[]>[]
  },

  lifetimes: {
    attached(){
      this.createSelectorQuery().selectAll('.section__title').boundingClientRect(rect=>{
        // @ts-ignore
        const titleOffsets = rect.map(item=>{
          return item.top
        })
        this.setData({
          titleOffsets
        })
      }).exec()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSectionTap(event: DataSetEvent<{index: number}>) {
      const {index} = event.currentTarget.dataset
      this.setData({
        selectedSectionIndex:index,
        scrollIntoIndex: index
      })
    },
    onScroll(event: WechatMiniprogram.ScrollViewScroll) {
      const offset = event.detail.scrollTop + event.target.offsetTop
      const index = this.data.titleOffsets.findIndex((item, index)=>{
        return (item <= offset && this.data.titleOffsets[index + 1] > offset)
      })
      index !== -1 && index !== this.data.selectedSectionIndex && this.setData({
        selectedSectionIndex: index
      })
    },
    addCart() {
      const item: CartItem = {
        id: '111',
        productId: '11111',
        productName: '大王奇异果',
        productPrice: 9,
        total: 1,
        attributes: [
          {
            id: '12',
            key: 'test',
            value: '加奶盖',
            price: 2
          },
           {
            id: '12',
            key: 'test',
            value: '加奶昔',
            price: 1
          }
        ]
      }
      cartStore.addItem(item)
    }
  }
})
