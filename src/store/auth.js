export default {
  namespaced: true,
  state: {
    token: '',
    system: '',
    account: {},
    isAuthed: false,
    isInitialized: false
  },
  getters: {
    isRoot (state) {
      return Boolean(state.isAuthed && (state.account.id === 0))
    },
    homeRoute ({ isAuthed, system }, { isRoot }) {
      const route = {}
      if (!isAuthed) {
        route.name = 'admin login'
      } else if (system === 'user' || isRoot) {
        route.name = 'user home'
      } else if (system === 'admin') {
        route.name = 'admin home'
      }

      return route
    }
  },
  mutations: {
    setAuth (state, { system = '', account = null }) {
      state.system = system
      state.account = account
    },
    setToken (state, token) {
      state.token = token
    },
    setAuthed (state, val = true) {
      state.isAuthed = val
    },
    setInitialized (state, val = true) {
      state.isInitialized = val
    }
  }
}
