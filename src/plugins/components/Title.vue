<template>
  <div
    :class="klass"
    style="padding-bottom: 0.75rem; margin-bottom: 0.75rem"
  >
    <p class="title is-4" style="margin-bottom: 0">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    hasBorderBottom: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    klass () {
      return {
        'is-flex': true,
        'has-border-bottom': this.hasBorderBottom
      }
    }
  }
}
</script>
