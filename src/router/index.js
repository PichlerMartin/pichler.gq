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
    name: 'Lebenslauf',
    component: () => import('../views/de.vue')
  },
  {
    path: '/en',
    name: 'Resume',
    component: () => import('../views/en.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
