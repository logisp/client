<template>
  <LevelContainer>
    <template v-slot:level-right>
      <LevelItem
        v-for="{ name, text } in items"
        :route="{ name }"
        :key="name"
      >
        {{$t(text)}}
      </LevelItem>
    </template>
  </LevelContainer>
</template>

<script>
import LevelItem from './Level/LevelItem'
import LevelContainer from './Level/Container'

export default {
  name: 'AppLevelPublic',
  components: {
    LevelItem,
    LevelContainer
  },
  data () {
    return {
      items: [
        { text: 'signUp', name: 'join' },
        { text: 'loginUser', name: 'user login' },
        { text: 'loginAdmin', name: 'admin login' }
      ]
    }
  }
}
</script>

<i18n>
zh:
  signUp: 注册
  loginUser: 用户登录
  loginAdmin: 管理员登录
en:
  signUp: Join
  loginUser: Login (user)
  loginAdmin: Login (admin)
</i18n>
