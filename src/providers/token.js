import Store from './store'
import Router from './router'
import Storage from './storage'
import { checkToken } from '@/api/open'

export default {
  get () {
    return Storage.get('token')
  },
  set (token) {
    Storage.set('token', token)
  },
  async check (token) {
    if (token) {
      this.set(token)
    } else {
      token = this.get()
    }
    if (!token) {
      Store.commit('setAuth', 'guest')
    } else {
      const handleThen = ({ data }) => {
        const { token, auth, roles } = data
        if (token) {
          this.set(token)
        }
        Store.commit('setAuth', auth)
        Store.commit('setRoles', roles)
      }

      return checkToken()
        .then(handleThen)
    }
  },
  handleForbidden () {
    const auth = Store.state.auth
    const route = {}
    if (auth === 'user') {
      route.name = 'user login'
    } else {
      route.name = 'admin login'
    }
    this.set(null)
    Store.commit('setAuth', 'guest')
    Router.push(route)
  }
}
