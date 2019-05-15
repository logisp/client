import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/routes'
import Store from './store'
import Token from './token'
import get from 'lodash/get'

Router.prototype.isMatched = isMatched

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
})

export default router

router.beforeEach((to, from, next) => {
  const routeAuth = to.matched
    .map(route => get(route, 'route.meta.auth'))
    .find(auth => auth)
  const auth = () => Store.state.auth
  const getAuth = () => Token.check().then(handleRouteAuth)
  const handleAuth = () => auth() === routeAuth && next()
  const handleRouteAuth = () => routeAuth ? handleAuth() : next()

  auth() ? handleRouteAuth() : getAuth()
})

function getValue (value) {
  return typeof value === 'number' ? value.toString() : value
}

function isMatched ({ name, params }) {
  const route = this.app.$route
  const isMatched = route.matched.findIndex(
    route => route.name === name
  ) !== -1

  if (!isMatched || !params) return isMatched

  for (let key in params) {
    if (
      getValue(params[key]) !==
      getValue(route.params[key])
    ) {
      return false
    }
  }

  return true
}
