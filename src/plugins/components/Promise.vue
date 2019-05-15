<template>
  <component :is="tag">
    <slot v-if="pending" name="pending">
      <!-- <Loading></Loading> -->
    </slot>
    <template v-else>
      <slot></slot>
      <slot name="then"></slot>
    </template>
  </component>
</template>

<script>
export default {
  name: 'Promise',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    handler: {
      type: Function,
      required: true
    },
    immediate: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      pending: true
    }
  },
  methods: {
    async handle () {
      this.pending = true
      await this.handler()
      this.pending = false
    }
  },
  created () {
    this.immediate && this.handle()
  }
}
</script>
