export default [
  {
    path: '*',
    name: '404',
    component: () => import('@/app/public/NotFound')
  }
]
