const BASER_URL = 'https://mock.apifox.cn/m1/1646135-0-default'
const request = <T>(method: RequetMethod, uri: string, data?: RequestData): Promise<T> => {
  return new Promise((resolve, reject) => {
      wx.request({
        method,
        url: BASER_URL+ uri,
        success: (response) => {
          response.statusCode !== 200 && reject(response.data as ErrorResponse)
          resolve(response.data as T)
        },
        fail: (error) => {
          reject({code: 500, message: error.errMsg})
        }
      })
  })
}

export default request