<template>
  <aside class="menu">
    <ul class="menu-list">
      <BaseMenu
        v-for="menu in menus" :key="menu.text"
        :route="menu.route"
        :text="menu.text"
        :isActive="$router.isMatched(menu.route)"
      />
    </ul>
  </aside>
</template>

<script>
import BaseMenu from './BaseMenu'

export default {
  name: 'RouteMenus',
  components: {
    BaseMenu
  },
  props: {
    menus: Array
  }
}
</script>
