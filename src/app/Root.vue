<template>
  <div></div>
</template>

<script>
import store from '@/providers/store'

export default {
  name: 'AppRoot',
  computed: {
    auth () {
      return this.$store.state.auth
    }
  },
  beforeRouteEnter (from, to, next) {
    next({
      name: authRoutes[store.state.auth]
    })
  }
}

const authRoutes = {
  user: 'user dashboard',
  admin: 'admin dashboard',
  guest: 'admin login'
}
</script>
