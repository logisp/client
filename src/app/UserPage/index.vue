<template>
  <div>
    <Promise
      tag="div"
      class="box container"
      style="height: 8rem; width: 400px; font-size: 1.25rem"
      :handler="getUserTitle"
    >
      <template v-slot:pending>
        <Loading></Loading>
      </template>
      <span class="icon">
        <i class="iconfont icon-user"></i>
      </span>
      <span>
        {{userTitle.name || userTitle.email.split('@')[0]}}
      </span>
      <div></div>
      <span class="icon">
        <i class="iconfont icon-points"></i>
      </span>
      <span>
        {{userTitle.points}}
      </span>
      <span style="font-size: 1rem">
        pts
      </span>
      <div></div>
      <span class="icon">
        <i class="iconfont icon-mail"></i>
      </span>
      <span>
        {{userTitle.email}}
      </span>
    </Promise>

    <div class="tabs is-centered" style="padding: 0">
      <ul>
        <li
          v-for="tab in tabs" :key="tab.text"
          :class="$router.isMatched({ name: tab.route }) && 'is-active'"
        >
          <a @click="$router.push({ name: tab.route })">
            <span>{{tab.text}}</span>
          </a>
        </li>
      </ul>
    </div>

    <router-view />
  </div>
</template>

<script>
import { getUserTitle } from '@/api/open'

export default {
  name: 'UserDetails',
  props: {
    id: {
      type: [Number, String]
    }
  },
  data: () => ({
    userTitle: {
      id: '',
      name: '',
      email: '',
      points: ''
    }
  }),
  computed: {
    auth () {
      return this.$store.state.auth
    },
    tabs () {
      return this.auth === 'user'
        ? userTabs : adminTabs
    }
  },
  methods: {
    getUserTitle () {
      const id = getUserId(this.id)
      const handleThen = response => {
        this.userTitle = response.data
      }

      return getUserTitle({ id })
        .then(handleThen)
    }
  }
}

const userTabs = [
  { text: '用户信息', route: 'user information' },
  { text: '个人设置', route: 'user settings' },
  { text: '充值记录', route: 'user deduction' },
  { text: '积分调整', route: 'user points adjustment' },
  { text: '消费记录', route: 'user points records' },
  { text: '积分充值', route: 'user points buy' }
]

const adminTabs = [
  { text: '用户信息', route: 'user information' },
  { text: '充值记录', route: 'user deduction' },
  { text: '积分调整', route: 'user points adjustment' },
  { text: '消费记录', route: 'user points records' },
  { text: '积分充值', route: 'user points buy' }
]

function getUserId (id) {
  if (id === 'my') {
    return null
  } else if (typeof id === 'number') {
    return id
  } else {
    const t = parseInt(id)

    return isNaN(t) ? null : t
  }
}
</script>
