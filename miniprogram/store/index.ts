import { configure } from 'mobx-miniprogram'

export { appStore } from './app'
export {cartStore} from './cart'

configure({enforceActions: 'observed'})