import { action, observable } from "mobx-miniprogram";

export const cartStore = observable({
  items: <CartItem[]>  [],
  get total(): number {
    let total = 0
    this.items.forEach(item => total+=item.total)
    return total
  },
  get totalPrice(): number {
    let totalPrice = 0
    this.items.forEach(item => {
      let price = 0;
      item.attributes.forEach(attr => price += attr.price)
      totalPrice += (item.productPrice * item.total + price)
    })
    return totalPrice
  },
  addItem: action(function(item: CartItem) {
    const index = cartStore.items.findIndex(per=>per.id === item.id)
    index === -1 ?
     cartStore.items = [...cartStore.items, item]
      : cartStore.items[index].total++
  }),
  removeItem: action(function(id: string) {
    cartStore.items = cartStore.items.filter(item=>item.id !== id)
  })
})