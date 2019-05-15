import Root from '@/app/Root'
import userRoutes from './user'
import adminRoutes from './admin'
import guestRoutes from './guest'
import publicRoutes from './public'

export default [
  {
    path: '/',
    name: 'root',
    component: Root
  }
].concat(
  publicRoutes,
  appendAuthMeta(userRoutes, 'user'),
  appendAuthMeta(adminRoutes, 'admin'),
  appendAuthMeta(guestRoutes, 'guest')
)

function appendAuthMeta (routes, auth) {
  routes.forEach(route => {
    if (!route.meta) {
      route.meta = { auth }
    } else if (Array.isArray(route.meta.auth)) {
      route.meta.auth.push(auth)
    } else {
      route.meta.auth = [ route.meta.auth, auth ]
    }
  })

  return routes
}
