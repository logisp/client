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
  name: 'RouteMenu',
  props: {
    text: String,
    route: Object
  },
  computed: {
    isActive () {
      return this.$router.isMatched(this.route)
    }
  }
}
</script>
