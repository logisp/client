<template>
  <header style="margin-bottom: 0.75rem">
    <p class="title is-4">订单处理</p>
    <div class="is-flex">
      <div class="field has-addons">
        <div class="control">
          <Dropdown />
        </div>
        <div class="control">
          <input
            style="width: 200px"
            type="text"
            class="input"
            placeholder="暂时没有搜索功能"
            @keypress.enter="handleSearch"
          >
        </div>
        <div class="control">
          <a
            class="button is-info"
            @click="handleSearch"
          >
            <span class="icon">
              <i class="iconfont icon-search"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from './Dropdown'

export default {
  name: 'UserOrderCreateHeader',
  components: {
    Dropdown
  },
  props: {
    multiSelected: {
      required: true,
      type: Array
    }
  },
  methods: {
    handleSearch (value) {
      this.$emit('search')
    }
  }
}
</script>
