import axios from 'axios'
import get from 'lodash/get'
import Token from './token'
import { errorStore } from './store'

export default axios

axios.defaults.baseURL = process.env.VUE_APP_API_URL

axios.interceptors.request.use(
  config => {
    config.headers.Authorization = getToken()

    return config
  }
)

axios.interceptors.response.use(
  response => {
    if (networkErrorState()) {
      setNetworkState(false)
    }

    return response
  },

  error => {
    if (isNetworkError(error)) {
      if (!networkErrorState()) {
        setNetworkState(true)
      }
    } else if (isForbiddenError(error)) {
      Token.handleForbidden()
    }

    throw error
  }
)

function getToken () {
  return Token.get()
}

function isNetworkError (error) {
  return get(error, 'message') === 'Network Error'
}

function isForbiddenError (error) {
  return get(error, 'response.status') === 403
}

function networkErrorState () {
  return errorStore.state.network
}

function setNetworkState (val) {
  errorStore.commit('setNetwork', val)
}
