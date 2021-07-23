import { createRouter, createWebHistory } from 'vue-router'
import Start from '../views/Start.vue'
import CableMain from '../views/CableMain.vue'
import CableSmall from '../views/CableSmall.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/cable_main',
    name: 'CableMain',
    component: CableMain
  },
  {
    path: '/cable_small',
    name: 'CableSmall',    
    component: CableSmall
  }
]

const router = createRouter({
  history: createWebHistory('./'),
  routes
})

export default router
