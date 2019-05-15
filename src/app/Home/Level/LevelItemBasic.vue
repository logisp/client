<template>
  <p class="level-item" style="margin-right: 1rem">
    <strong v-if="isActive">
      <slot />
    </strong>
    <a v-else @click="$emit('click')">
      <slot />
    </a>
  </p>
</template>

<script>
export default {
  name: 'LevelItemBasic',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>
