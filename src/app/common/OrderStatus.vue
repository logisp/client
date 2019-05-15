<template>
  <span
    class="tag is-success"
    style="font-size: 0.9rem"
    v-t="value"
  ></span>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<i18n>
zh:
  posting: 待发货
  inbounding: 待收货
  inbounded: 已入库
</i18n>
