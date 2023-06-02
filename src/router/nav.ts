interface Link {
  name: string
  path: string
  component: any
}

export const navbarItems: Link[] = [
  {
    name: 'Inici',
    path: '/',
    component: () => import('@/views/Inici.vue')
  },
  {
    name: 'Conceptes',
    path: '/conceptes',
    component: () => import('@/views/Conceptes.vue')
  },
  {
    name: 'Literatura',
    path: '/literatura',
    component: () => import('@/views/Literatura.vue')
  },
  {
    name: 'Altres projectes',
    path: '/projectes',
    component: () => import('@/views/Projectes.vue')
  },
  {
    name: 'Sobre'
  }
]
