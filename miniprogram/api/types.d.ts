type RequetMethod = "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined
type ErrorResponse = {
  code: number;
  message: string;
}

type HomePageData = {
  swiper: SwiperData[],
  iconNavigations: IconNavigation[]
}


type RequestData = string | WechatMiniprogram.IAnyObject | ArrayBuffer

type UserType = {
  id: string;
  mobile: number;
  gender?: Gender,
  birthDay?: string;
}

type Gender = 'MALE' | 'FEMALE' | 'UNKNOWN' | null


type UserUpdateRequest = {
  mobile?: number;
  gender?: Gender,
  birthDay?: string;
}

type ListResult<T> = {
  paging: Paging,
  data: Array<T>
}

interface Paging {
  page: number;
  size: number;
  total: number;
}

type Location = {
  latitude: number;
  longitude: number;
}