import localRequest from "./localReuqest"

const localMenu = (categoryid:number) => {
  return localRequest<Products[]>('GET', `/product/getProductDetails?categoryid=${categoryid}`)
}

export default {
  localMenu
}