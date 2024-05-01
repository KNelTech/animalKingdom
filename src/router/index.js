import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage.vue'
import octopiView from '../views/octopi.vue'
import demodexView from '../views/demodex.vue'
import lampreyView from '../views/lamprey.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/octopi',
      name: 'octopi',
      component: octopiView
    },
    {
      path: '/demodex',
      name: 'demodex',
      component: demodexView
    },
    {
      path: '/lamprey',
      name: 'lamprey',
      component: lampreyView
    }
  ]
})

export default router
