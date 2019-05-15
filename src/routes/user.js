import userChildren from './user-children'
import UserDashboard from '@/app/user/Dashboard'

export default [
  {
    path: '/user',
    name: 'user dashboard',
    component: UserDashboard
  },
  {
    path: '/user/cart',
    name: 'user cart',
    component: () => import('@/app/user/Cart')
  },
  {
    path: '/user/purchase',
    name: 'user purchase',
    component: () => import('@/app/Purchase')
  },
  {
    path: '/user/orders',
    name: 'user orders',
    component: () => import('@/app/user/Orders')
  },
  {
    path: '/user/settings',
    name: 'user settings',
    redirect: { name: 'user settings personal' },
    component: () => import('@/app/user/Settings'),
    children: [
      {
        path: 'personal',
        name: 'user settings personal',
        component: () => import('@/app/UserPage/Settings/Personal')
      },
      {
        path: 'amazon',
        name: 'user settings amazon',
        component: () => import('@/app/UserPage/Settings/Amazon')
      },
      {
        path: 'account',
        name: 'user settings account',
        component: () => import('@/app/UserPage/Settings/Account')
      }
    ]
  },
  {
    path: '/user/:id',
    auth: ['user', 'admin'],
    name: 'user page',
    props: true,
    redirect: { name: 'user information' },
    component: () => import('@/app/UserPage'),
    children: userChildren
  }
]
