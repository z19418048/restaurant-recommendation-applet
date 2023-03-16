import request from "./request"

const current = () => {
  return request<UserType>('GET', '/users/current')
}

const updateCurrent = (userUpdateRequest: UserUpdateRequest) => {
  return request<UserType>('PUT', '/users/current')
}

export default {
  current,
  updateCurrent
}