import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Storage from './storage'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en'
})

export default i18n

const locale = Storage.get('locale')

if (locale) {
  i18n.locale = locale
}
