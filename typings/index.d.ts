/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}

type ItemParam = {currentTarget: {dataset: {item: SwiperData}}}

type DataSetEvent<T> = {
  currentTarget: {
    dataset: T
  }
}

type CartItem = {
  id: string; // id: pruductId +attId+ ...attrValues
  productId: string;
  productName: string;
  attributes: CartItemAttribute[],
  productPrice: number;
  total: number;
}

type CartItemAttribute = {
  id: string;
  key: string;
  value: string;
  price: number;
}