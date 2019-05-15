<template>
  <div class="app-level-container">
    <nav class="app-container level is-mobile">
      <div class="level-left">
        <Logo :auth="auth"></Logo>
        <div style="width: 1rem"></div>
        <slot name="level-left"></slot>
      </div>
      <div class="level-right">
        <slot name="level-right"></slot>
        <template v-if="isRoot">
          <LevelItemBasic
            v-for="item in LevelRootItems" :key="item.text"
            :isActive="auth === item.auth"
            @click="handleAuthRootToggle(item.auth)"
          >
            {{$t(item.text)}}
          </LevelItemBasic>
        </template>
        <Logout></Logout>
        <Language></Language>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from './Logo'
import Logout from './Logout'
import Language from './Language'
// import LevelItem from './LevelItem'
import LevelItemBasic from './LevelItemBasic'
import Token from '@/providers/token'
import { authRootToggle } from '@/api/open'

export default {
  name: 'LevelContainer',
  components: {
    Logo,
    Logout,
    Language,
    // LevelItem,
    LevelItemBasic
  },
  data () {
    return {
      LevelRootItems: [
        { text: 'userSystem', auth: 'user' },
        { text: 'adminSystem', auth: 'admin' }
      ]
    }
  },
  computed: {
    auth () {
      return this.$store.state.auth
    },
    roles () {
      return this.$store.state.roles
    },
    isRoot () {
      const roles = ['user', 'admin']

      return roles.includes(this.auth) && this.roles.includes('root')
    }
  },
  methods: {
    handleAuthRootToggle (auth) {
      const handleThen = response => {
        Token.set(response.data.token)
        this.$store.commit('setAuth', auth)
        this.$router.push(auth === 'user' ? '/user' : '/admin')
      }

      authRootToggle().then(handleThen)
    }
  }
}
</script>

<i18n>
zh:
  userSystem: 用户系统
  adminSystem: 管理系统
en:
  userSystem: User System
  adminSystem: Admin System
</i18n>
