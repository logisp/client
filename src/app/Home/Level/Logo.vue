<template>
  <div class="level-item">
    <label
      class="app-logo is-unselectable title"
      @click="$router.push('/')"
    >LOGO</label>
  </div>
</template>

<script>
export default {
  name: 'LevelLogo',
  props: {
    auth: String
  }
}
</script>
