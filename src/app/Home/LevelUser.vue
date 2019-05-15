<template>
  <LevelContainer>
    <template v-slot:level-left>
      <LevelItem :route="{ name: 'user cart' }">
        商品添加
      </LevelItem>
      <LevelItem :route="{ name: 'user orders' }">
        订单管理
      </LevelItem>
      <LevelItem :route="{ name: 'user settings' }">
        个人设置
      </LevelItem>
    </template>
  </LevelContainer>
</template>

<script>
import LevelItem from './Level/LevelItem'
import LevelContainer from './Level/Container'

export default {
  name: 'AppLevelUser',
  components: {
    LevelItem,
    LevelContainer
  }
}
</script>
