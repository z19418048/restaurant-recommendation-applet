import request from "./request"

type HomePageData = {
  swiper: SwiperData[],
  iconNavigations: IconNavigation[]
}


const home = () => {
  return request<HomePageData>('GET', '/page/home')
}

export default {
  home
}

