<template>
  <div
    v-if="auth !== 'guest'"
    class="level-item"
    style="margin-right: 1rem"
  >
    <a
      v-t="'logout'"
      @click="handleClick"
    />
  </div>
</template>

<script>
import Token from '@/providers/token'

export default {
  name: 'LevelLogout',
  computed: {
    auth () {
      return this.$store.state.auth
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleClick () {
      this.$confirm({
        title: this.$t('logoutConfirm'),
        content: this.$t('logoutCurrentAccount'),
        handler: this.handler
      })
    },
    handler () {
      const route = this.auth === 'user' ? '/user/login' : '/admin/login'
      Token.set(null)
      this.$store.commit('setAuth', 'guest')
      this.$router.push(route)
    }
  }
}
</script>

<i18n>
zh:
  logout: 退出登录
  logoutConfirm: 退出确认
  logoutCurrentAccount: 是否退出已登录的用户
en:
  logout: Logout
  logoutConfirm: Logout
  logoutCurrentAccount: Logout your account
</i18n>
