import { BehaviorWithStore } from "mobx-miniprogram-bindings";
import { cartStore } from "../store/cart";
import { appStore } from "../store/index";

export const storeBehavior = BehaviorWithStore({
  storeBindings: [{
    namespace: 'app',
    store: appStore,
    fields: ['token', 'currentUser', 'activeTabbar'],
    actions: ['login', 'logout', 'switchTabbar']
  },
  {
    namespace: 'cart',
    store: cartStore,
    fields: ['items', 'total', 'totalPrice'],
    actions: []
  }
]
})