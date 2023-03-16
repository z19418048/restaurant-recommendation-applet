import request from "./request"
import {StoreStatus} from '../enums/StoreStatus'
export type Store = {
  id: string;
  name: string;
  address: string;
  openingTime: {
    start: string;
    end: string;
  };
  status: keyof typeof StoreStatus;
  location: Location;
  phone: string;
  distance?: number;
}

const list = (storeSearchRequest: Location & Paging) => {
  return request<ListResult<Store>>('GET', '/stores', storeSearchRequest)
}

const menu = (id: string) => {
  return request<CategoryWithProduct[]>('GET', `/stores/${id}/menu`)
}

export default {
  list,
  menu
}