import Radio from './Radio'
import Title from './Title'
import Loader from './Loader'
import Checkbox from './Checkbox'
import VPromise from './Promise'

export default {
  install (Vue) {
    Vue.component('Radio', Radio)
    Vue.component('Title', Title)
    Vue.component('Loader', Loader)
    Vue.component('Loading', Loader)
    Vue.component('Checkbox', Checkbox)
    Vue.component('Promise', VPromise)
  }
}
