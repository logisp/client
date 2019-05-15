import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store'

Vue.use(Vuex)

const VuexStore = new Vuex.Store(store)

export default VuexStore

export function getNamespacedStore (nsp) {
  return VuexStore._modulesNamespaceMap[nsp + '/'].context
}

export const authStore = {}
export const errorStore = getNamespacedStore('error')
