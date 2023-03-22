import { appStore } from "../store/index"

const BASER_URL = 'http://localhost:8080'
const localRequest = <T>(method: RequetMethod, uri: string, data?: RequestData): Promise<T> => {
  return new Promise((resolve, reject) => {
      wx.request({
        method,
        url: BASER_URL+ uri,
        data,
        success: (response) => {
          if(response.statusCode !== 200) {
            handleError(response.data as ErrorResponse)
            reject(response.data)
          }
          resolve(response.data as T)
        },
        fail: (error) => {
          reject({code: 500, message: error.errMsg})
        }
      })
  })
}

const handleError = (error: ErrorResponse) => {
  if(error.code === 401) {
    appStore.logout()
  }
  wx.showToast({
    title: error.message,
    icon: 'error'
  })
}

export default localRequest