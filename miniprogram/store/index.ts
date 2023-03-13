import { configure } from 'mobx-miniprogram'

export { appStore } from './app'

configure({enforceActions:'observed'})