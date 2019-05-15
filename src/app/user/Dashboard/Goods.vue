<template>
  <div class="column user-home-block">
    <p
      v-t="'goods'"
      class="title is-5"
      style="margin-bottom: 1rem"
    />
    <div
      class="is-flex"
      style="align-items: center"
    >
      <p
        class="title is-1"
        style="margin-bottom: 0; white-spate: nowrap"
      >
        999
        <span
          v-t="'pieces'"
          class="title is-4"
        />
      </p>
      <div class="is-flex-auto"></div>
      <div
        class="is-flex is-flex-column"
        style="justify-content: center; align-items: flex-end"
      >
        <a
          v-t="'create'"
          class="button is-info"
          @click="$router.push({ name: 'user cart' })"
        />
        <div style="height: 0.5rem"></div>
        <a
          @click="$router.push({ name: 'user orders' })"
        >
          <span v-t="'manage'" />
          >>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContentPoints'
}
</script>

<i18n>
zh:
  pieces: 件
  goods: 已售物品
  create: 创建订单
  manage: 管理商品
en:
  pieces: pieces
  goods: Saled Goods
  create: Create
  manage: Manage
</i18n>
