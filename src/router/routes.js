import { createRouter, createWebHistory } from 'vue-router'
import Start from '../views/Start.vue'
import Act from '../views/Act.vue'
import Sticker from '../views/Sticker.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/act',
    name: 'Act',
    component: Act
  },
  {
    path: '/sticker',
    name: 'Sticker',    
    component: Sticker
  }
]

const router = createRouter({
  history: createWebHistory('./'),
  routes
})

export default router
