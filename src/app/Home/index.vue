<template>
  <div id="app">
    <Level v-if="isAuthed" :auth="auth"></Level>
    <Errors />
    <Notifications />
    <router-view v-if="isAuthed" class="app-body" />
    <div style="height: 1rem"></div>
    <Confirmer />
    <Waiting />
  </div>
</template>

<script>
console.log(1000)

export default {
  name: 'AppLoader',
  components: {
    Level: () => import('./Level'),
    Errors: () => import('./tools/Errors'),
    Waiting: () => import('./tools/Waiting'),
    Confirmer: () => import('./tools/Confirmer'),
    Notifications: () => import('./tools/Notifications')
  },
  computed: {
    auth () {
      return this.$store.state.auth
    },
    isAuthed () {
      return this.auth !== null
    }
  }
}
</script>

<style src="@/assets/sass/index.sass" lang="sass"></style>
