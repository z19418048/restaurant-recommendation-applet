import { SwiperData } from "../components/z-swiper/types"
import request from "./request"

type HomePageData = {
  swiper: SwiperData[]
}


const home = () => {
  return request<HomePageData>('GET', '/page/home')
}

export default {
  home
}

