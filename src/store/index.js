// import auth from './auth'
import error from './error'

export default {
  state: {
    auth: null,
    roles: [],
    fees: {}
  },
  getters: {
    isRoot (state) {
      return state.roles.includes('root')
    }
  },
  mutations: {
    setFees (state, data) {
      state.fees = data
    },
    setAuth (state, auth) {
      state.auth = auth
    },
    setRoles (state, roles) {
      state.roles = roles
    }
  },
  modules: {
    // auth,
    error
  }
}
