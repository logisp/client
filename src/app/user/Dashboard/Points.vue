<template>
  <div class="column user-home-block">
    <p
      v-t="'points'"
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
        100,000
        <span
          v-t="'pt'"
          class="title is-4"
        />
      </p>
      <div class="is-flex-auto"></div>
      <div
        class="is-flex is-flex-column"
        style="justify-content: center; align-items: flex-end"
      >
        <a
          v-t="'getPoints'"
          class="button is-info"
          @click="$router.push({ name: 'user purchase' })"
        />
        <div style="height: 0.5rem"></div>
        <a>
          <span v-t="'accountHistory'" />
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
  pt: 分
  points: 积分点数
  getPoints: 积分充值
  accountHistory: 充值记录
en:
  pt: pt
  points: Points
  getPoints: Get Points
  accountHistory: History of accounting
</i18n>
