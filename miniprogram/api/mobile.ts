import request from "./request"

const get = (code: string) => {
  return request<number>('GET', `/mobile/${code}`)
} 

export default {
  get
}