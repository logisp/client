import AdminOrders from '@/app/admin/Orders'

export default [
  {
    path: '/admin',
    name: 'admin dashboard',
    redirect: { name: 'admin orders' }
  },
  {
    path: '/admin/orders',
    name: 'admin orders',
    component: AdminOrders
  },
  {
    path: '/admin/users',
    name: 'admin users',
    component: () => import('@/app/admin/Users'),
    children: [
      {
        path: ':id/points/purchase',
        name: 'admin user points purchase',
        props: route => ({ id: route.params.id, auth: 'admin' }),
        component: () => import('@/app/UserPoints/Purchase')
      },
      {
        path: ':id/points/consumption',
        name: 'admin user points consumption',
        props: route => ({ id: route.params.id, auth: 'admin' }),
        component: () => import('@/app/UserPoints/Consumption')
      },
      {
        path: ':id/points/adjustment',
        name: 'admin user points adjustment',
        props: route => ({ id: route.params.id, auth: 'admin' }),
        component: () => import('@/app/UserPoints/Adjustment')
      }
    ]
  },
  {
    path: '/admin/fees',
    name: 'admin fees',
    redirect: { name: 'admin fees manage' },
    component: () => import('@/app/admin/Fees'),
    children: [
      {
        path: 'manage',
        name: 'admin fees manage',
        component: () => import('@/app/admin/Fees/Manage')
      },
      {
        path: 'records',
        name: 'admin fees records',
        component: () => import('@/app/admin/Fees/Records')
      }
    ]
  }
]
