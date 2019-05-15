<template>
  <header style="margin-bottom: 0.75rem">
    <p class="title is-4">订单管理</p>
    <div
      v-show="multiSelected.length === 0"
      class="field has-addons"
    >
      <div class="control">
        <input
          style="width: 400px"
          type="text"
          class="input is-medium"
          placeholder="暂时没有搜索功能"
          @keypress.enter="handleSearch"
        >
      </div>
      <div class="control">
        <a
          class="button is-info is-medium"
          @click="handleSearch"
        >
          <span class="icon is-medium">
            <i
              class="iconfont icon-search"
              style="font-size: 1.75rem"
            ></i>
          </span>
        </a>
      </div>
    </div>
    <div
      v-show="multiSelected.length > 0"
      class="field has-addons"
      style="height: 2.8rem"
    >
      <!-- <p class="control">
        <a
          @click="$emit('delete')"
          class="button is-medium is-light"
        >
          <span>删除</span>
        </a>
      </p> -->
      <!-- <p class="control">
        <a
          @click="$emit('order')"
          class="button is-medium is-light"
        >
          <span>下单</span>
        </a>
      </p> -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'UserOrderCreateHeader',
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
