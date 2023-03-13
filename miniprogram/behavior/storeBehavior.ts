import { BehaviorWithStore } from "mobx-miniprogram-bindings";
import { appStore } from "../store/app";

export const storeBehavior = BehaviorWithStore({
  storeBindings:[{
    namespace:'app',
    store: appStore,
    fields:['token'],
    actions:['login']
  }]
})