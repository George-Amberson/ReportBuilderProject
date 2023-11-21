import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Reports from '@/views/ReportView.vue'
import ComingSoon from '@/components/ComingSoon.vue'
import Login from '@/views/LoginPage.vue'
import ReportsList from '@/components/ReportsList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Reports,
      children: [
        {
          path: 'reports',
          components: {
            default: ReportsList,
          },
        },
        {
          path: 'comingsoon',
          components: {
            default: ComingSoon,
          }
        }
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
