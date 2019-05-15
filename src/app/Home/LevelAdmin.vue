<template>
  <LevelContainer>
    <template v-slot:level-left>
      <LevelItem :route="{ name: 'admin orders' }">
        订单管理
      </LevelItem>
      <LevelItem :route="{ name: 'admin fees' }">
        费用管理
      </LevelItem>
      <LevelItem :route="{ name: 'admin users' }">
        用户管理
      </LevelItem>
    </template>
  </LevelContainer>
</template>

<script>
import LevelItem from './Level/LevelItem'
import LevelContainer from './Level/Container'

export default {
  name: 'AppLevelAdmin',
  components: {
    LevelItem,
    LevelContainer
  }
}
</script>
