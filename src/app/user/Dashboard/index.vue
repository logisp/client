<template>
  <div class="container" key="dashboard">
    <div class="is-flex">
      <Points />
      <div style="width: 1rem"></div>
      <Goods />
    </div>
  </div>
</template>

<script>
import Goods from './Goods'
import Points from './Points'

export default {
  name: 'UserHomeContent',
  components: {
    Goods,
    Points
  }
}
</script>
