import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import De from '../views/de.vue'
import En from '../views/en.vue'

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
    component: De
  },
  {
    path: '/en',
    mode: history,
    name: 'en',
    component: En
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
