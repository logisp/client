<template>
  <li>
    <a
      :class="isActive && 'is-active'"
      @click="$router.push(route)"
      v-text="text"
    />
  </li>
</template>

<script>
export default {
  name: 'BaseMenu',
  props: {
    text: String,
    route: Object,
    isActive: Boolean
  }
}
</script>
