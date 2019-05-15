import UserJoin from '@/app/public/UserJoin'
import UserLogin from '@/app/public/UserLogin'
import AdminLogin from '@/app/public/AdminLogin'

export default [
  {
    path: '/join',
    name: 'join',
    component: UserJoin
  },
  {
    path: '/user/login',
    name: 'user login',
    component: UserLogin
  },
  {
    path: '/admin/login',
    name: 'admin login',
    component: AdminLogin
  }
]
