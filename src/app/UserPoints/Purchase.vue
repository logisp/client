<template>
  <PointsContainer
    :user-id="id"
    view="purchase"
  />
</template>

<script>
import PointsContainer from './Container'

export default {
  name: 'PointPurchase',
  components: {
    PointsContainer
  },
  props: {
    id: {},
    auth: {}
  }
}
</script>
