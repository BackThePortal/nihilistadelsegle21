import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { navbarItems } from '@/router/nav'

const routes: RouteRecordRaw[] = navbarItems

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
