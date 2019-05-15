<template>
  <PointsContainer
    :user-id="id"
    view="purchase"
  />
</template>

<script>
import PointsContainer from './Container'

export default {
  name: 'PointAdjustment',
  components: {
    PointsContainer
  }
}
</script>
