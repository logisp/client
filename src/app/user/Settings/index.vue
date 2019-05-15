<template>
  <div class="container" key="profile" style="width: 700px">
    <div class="columns" style="margin-bottom: 1rem">
      <div class="column is-narrow">
        <RouteMenus
          style="min-width: 160px"
          :menus="menus"
        />
      </div>
      <div class="column">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import RouteMenus from '@/components/Menus/RouteMenus'

export default {
  name: 'UserProfile',
  components: {
    RouteMenus
  },
  data () {
    return {
      menus: [
        { text: this.$t('personal'), route: { name: 'user settings personal' } },
        { text: this.$t('account'), route: { name: 'user settings account' } },
        { text: this.$t('amazon'), route: { name: 'user settings amazon' } }
      ]
    }
  }
}
</script>

<i18n>
zh:
  personal: 个人信息
  account: 账户管理
  email: 电子邮箱
  amazon: 亚马逊账户
en:
  personal: Personal
  account: Account
  email: Email
  amazon: Amazon
</i18n>
