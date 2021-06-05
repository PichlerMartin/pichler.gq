import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import De from '/path/to/destination.html'
import En from '/path/to/destination.html'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/de',
    mode: history,
    name: 'de',
    component: { template: De }
  },
  {
    path: '/en',
    mode: history,
    name: 'en',
    component: { template: En }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
