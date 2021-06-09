import { createRouter, createWebHistory } from 'vue-router'
import Lebenslauf from '../views/LebenslaufView.vue'
import Resume from '../views/ResumeView.vue'

const routes = [
  {
    path: '/',
    name: 'Lebenslauf',
    component: Lebenslauf
  },
  {
    path: '/en',
    name: 'Resume',
    component: Resume
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
