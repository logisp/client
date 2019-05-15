<template>
  <div>
    <div class="login-dialog">
      <div class="login-dialog-header">
        <p
          v-t="'LoginUser'"
          class="title is-5"
        />
      </div>
      <div class="login-dialog-body">
        <div class="field">
          <div class="label">
            <label v-t="'email'"/>
          </div>
          <p class="control has-icons-left">
            <input
              v-model="fields.address"
              class="input"
              type="email"
              @focus="handleFocus"
            >
            <span class="icon is-small is-left">
              <i class="iconfont icon-mail"></i>
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
import { authUserByEmail } from '@/api/open'

export default {
  name: 'LoginUser',
  data () {
    return {
      fields: {
        address: '',
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
      authUserByEmail(this.fields)
        .then(handleThen)
        .catch(handleCatch)
        .finally(handleFinally)
    }
  }
}
</script>

<i18n>
zh:
  email: 邮箱
  signIn: 登录
  password: 密码
  LoginUser: 用户登录
  failToLogin: 登录失败
en:
  email: Email
  signIn: Sign in
  password: Password
  LoginUser: Login User
  failToLogin: fail to login user system
</i18n>
