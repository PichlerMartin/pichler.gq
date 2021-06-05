import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    component: import('/../views/de.html'),
  },
  {
    path: '/en',
    mode: history,
    name: 'en',
    component: import('/../views/en.html'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
