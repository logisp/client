<template>
  <component
    :is="tag"
    :class="klass"
    v-on="$listeners"
    style="cursor: pointer"
    @mouseout="isHovered = false"
    @mouseover="isHovered = true"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'AnchorWrapper',
  props: {
    tag: {
      type: String,
      default: 'td'
    }
  },
  data: () => ({
    isHovered: false
  }),
  computed: {
    klass: vm => ({
      'has-text-dark': vm.isHovered,
      'has-text-link': !vm.isHovered
    })
  }
}
</script>
