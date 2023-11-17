import { createRouter, createWebHistory } from 'vue-router'
import ReportsList from '@/components/ReportsList.vue'
import ComingSoon from '@/components/ComingSoon.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Reports',
      component: ReportsList
    },
    {
      path: '/comingsoon',
      name: 'ComingSoon',
      component: ComingSoon
    }
  ]
})

export default router
