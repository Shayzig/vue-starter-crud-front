import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import ItemIndex from './views/ItemIndex.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/item',
    name: 'ItemIndex',
    component: ItemIndex
  }
]


export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})

