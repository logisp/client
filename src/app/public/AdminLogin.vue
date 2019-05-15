<template>
  <div>
    <div class="login-dialog">
      <div class="login-dialog-header">
        <p
          v-t="'loginAdmin'"
          class="title is-5"
        />
      </div>
      <div class="login-dialog-body">
        <div class="field">
          <div class="label">
            <label v-t="'username'"/>
          </div>
          <p class="control has-icons-left">
            <input
              v-model="fields.username"
              class="input"
              type="email"
              @focus="handleFocus"
            >
            <span class="icon is-small is-left">
              <i class="iconfont icon-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <div class="label">
            <label v-t="'password'"/>
          </div>
          <p class="control has-icons-left">
            <input
              v-model="fields.password"
              type="password"
              class="input"
              @focus="handleFocus"
              @keypress.enter="handleSubmit"
            >
            <span class="icon is-small is-left">
              <i class="iconfont icon-password"></i>
            </span>
          </p>
          <p
            class="help is-danger"
            style="min-height: 0.25rem"
          >
            <span
              v-if="errorMessage"
              v-t="errorMessage"
            />
          </p>
        </div>
        <div class="field">
          <div class="control">
            <a
              class="button is-info is-fullwidth is-rounded"
              :class="isLoading && 'is-loading'"
              v-t="'signIn'"
              @click="handleSubmit"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Token from '@/providers/token'
import { authAdminByUsername } from '@/api/open'

export default {
  name: 'LoginAdmin',
  data () {
    return {
      fields: {
        username: '',
        password: ''
      },
      errorMessage: '',
      isLoading: false
    }
  },
  methods: {
    setErrorMessage (msg = 'failToLogin') {
      this.errorMessage = msg
    },
    handleFocus () {
      this.setErrorMessage('')
    },
    handleSubmit () {
      const handleBefore = () => {
        this.isLoading = true
      }
      const handleThen = response => {
        Token.check(response.data.token)
          .then(() => this.$router.push('/'))
      }
      const handleCatch = () => {
        this.setErrorMessage()
      }
      const handleFinally = () => {
        this.isLoading = false
      }
      handleBefore()
      authAdminByUsername(this.fields)
        .then(handleThen)
        .catch(handleCatch)
        .finally(handleFinally)
    }
  }
}
</script>

<i18n>
zh:
  signIn: '登录'
  username: '用户名'
  password: '密码'
  loginAdmin: '管理员登录'
  failToLogin: '登录失败'
en:
  signIn: 'Sign in'
  username: 'Username'
  password: 'Password'
  loginAdmin: 'Login Admin'
  failToLogin: 'fail to login user system'
</i18n>
