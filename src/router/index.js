import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Lebenslauf from '../views/LebenslaufView.vue'
import Resume from '../views/ResumeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Lebenslauf',
    name: 'Lebenslauf',
    component: Lebenslauf
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: Resume
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
