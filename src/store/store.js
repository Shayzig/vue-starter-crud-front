import Vuex from 'vuex'

import { itemStore } from './item.store.js'

export const store = Vuex.createStore({
  strict: true,
  modules: {
    itemStore,
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
