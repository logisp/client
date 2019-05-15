<template>
  <div v-if="isNetworkError" class="app-errors">
    <div class="app-container">
      <p class="title is-4 has-text-white">
        网络连接失败，刷新后重新连接
      </p>
    </div>
  </div>
</template>

<script>
import { errorStore } from '@/providers/store'

export default {
  name: 'AppErrors',
  computed: {
    isNetworkError () {
      return errorStore.state.network
    }
  }
}
</script>
