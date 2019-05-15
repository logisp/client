export default [
  {
    path: 'info',
    name: 'user information',
    component: () => import('@/app/UserPage/Information')
  },
  {
    path: 'points/adjustment',
    name: 'user points adjustment',
    component: () => import('@/app/UserPage/Adjustment')
  }
  // {
  //   path: 'settings',
  //   name: 'user settings',
  //   redirect: { name: 'user settings personal' },
  //   component: () => import('@/app/UserPage/Settings'),
  //   children: [
  //     {
  //       path: 'personal',
  //       name: 'user settings personal',
  //       component: () => import('@/app/UserPage/Settings/Personal')
  //     },
  //     {
  //       path: 'amazon',
  //       name: 'user settings amazon',
  //       component: () => import('@/app/UserPage/Settings/Amazon')
  //     },
  //     {
  //       path: 'account',
  //       name: 'user settings account',
  //       component: () => import('@/app/UserPage/Settings/Account')
  //     }
  //   ]
  // }
]
