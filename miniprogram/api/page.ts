import request from "./request"

const home = () => {
  return request<HomePageData>('GET', '/page/home')
}

export default {
  home
}

