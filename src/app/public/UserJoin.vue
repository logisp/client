<template>
  <div>
    <div class="login-dialog">
      <div class="login-dialog-header">
        <p
          v-t="'userRegister'"
          class="title is-5"
        />
      </div>
      <div class="login-dialog-body">
        <div class="field">
          <div class="label">
            <label v-t="'email'" />
          </div>
          <p class="control has-icons-left">
            <input
              v-model="fields.address"
              @focus="handleFocus"
              class="input"
              type="email"
            >
            <span class="icon is-small is-left">
              <i class="iconfont icon-mail"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <div class="label">
            <label v-t="'password'" />
          </div>
          <p class="control has-icons-left">
            <input
              v-model="fields.password"
              @focus="handleFocus"
              @keypress.enter="handleSubmit"
              type="password"
              class="input"
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
              :class="{ 'is-loading': isLoading }"
              v-t="'join'"
              @click="handleSubmit()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Token from '@/providers/token'
import { joinUser, authUserByEmail } from '@/api/open'

export default {
  name: 'Join',
  data () {
    return {
      errorMessage: null,
      isLoading: false,
      fields: {
        address: '',
        password: ''
      }
    }
  },
  methods: {
    setErrorMessage (msg = 'failToJoin') {
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
        const handleThen = response => {
          Token.check(response.data.token)
            .then(() => this.$router.push('/'))
        }
        authUserByEmail(this.fields)
          .then(handleThen)
      }
      const handleCatch = () => {
        this.setErrorMessage('failToJoin')
      }
      const handleFinally = () => {
        this.isLoading = false
      }
      handleBefore()
      joinUser(this.fields)
        .then(handleThen)
        .catch(handleCatch)
        .finally(handleFinally)
    }
  }
}
</script>

<i18n>
zh:
  join: 注册
  email: 邮箱
  password: 密码
  failToJoin: 注册失败
  userRegister: 用户注册
  emailHasBeenUsed: 邮箱已被使用
en:
  join: Join
  email: Email
  password: Password
  failToJoin: fail to register
  userRegister: User Register
  emailHasBeenUsed: Email has been used
</i18n>
