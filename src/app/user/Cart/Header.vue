<template>
  <header style="margin-bottom: 0.75rem">
    <Title>购物车</Title>
    <div
      v-show="multiSelected.length === 0"
      class="field has-addons"
    >
      <div class="control">
        <input
          style="width: 600px"
          type="text"
          class="input is-medium"
          placeholder="按回车直接添加商品，以后支持搜索和添加 Amazon 商品"
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
    >
      <p class="control">
        <a
          @click="$emit('delete')"
          class="button is-medium is-light"
        >
          <span>删除</span>
        </a>
      </p>
      <p class="control">
        <a
          @click="$emit('order')"
          class="button is-medium is-light"
        >
          <span>下单</span>
        </a>
      </p>
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

<i18n>
zh:
  // title: 购物车管理
  // excute: 执行
  // create: 创建
  // remove: 删除
  // copy: 复制
en:
  // title: Create Good
  // excute: Excute
  // create: Create
  // remove: Remove
  // copy: Copy
jp:
  // title: 商品情報入力
  // excute: 実行
  // create: 登録する
  // remove: 削除する
  // copy: 複製する
</i18n>
