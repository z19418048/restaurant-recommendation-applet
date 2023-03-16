import request from "./request"

const create = (code: string): Promise<string> => {
  return request('POST', '/tokens', {code})
}

export default {
  create
}