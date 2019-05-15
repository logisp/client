<template>
  <LevelItemBasic
    :isActive="isRouteMatched"
    @click="handleClick"
  >
    <slot></slot>
  </LevelItemBasic>
</template>

<script>
import LevelItemBasic from './LevelItemBasic'

export default {
  name: 'LevelItem',
  components: {
    LevelItemBasic
  },
  props: {
    route: {
      type: [Object, String]
    }
  },
  computed: {
    isRouteMatched () {
      return this.$router.isMatched(this.route)
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
      this.$router.push(this.route)
    }
  }
}
</script>
