import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/zhuce',
    name: 'ZhuC',
    component: () => import( '../views/ZhuC.vue')
  },
  {
    path: '/zongye',
    name: 'ZongY',
    component: () => import( '../views/ZongY.vue')
  },
  {
    path: '/xiangQ',
    name: 'XiangQ',
    component: () => import( '../views/XiangQ.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
