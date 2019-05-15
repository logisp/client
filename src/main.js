import Vue from 'vue'
import App from '@/app/Home'
import i18n from './providers/i18n'
import store from './providers/store'
import router from './providers/router'
import clickoutside from './directives/clickoutside'
import helper from './plugins/helper'
import components from './plugins/components'

Vue.config.productionTip = process.env.NODE_ENV

console.log(process.env)

Vue.use(helper)
Vue.use(components)
Vue.directive('clickoutside', clickoutside)

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
