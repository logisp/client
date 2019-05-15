<template>
  <td
    class="is-selectable"
    @click="isHovered = !isHovered"
    v-clickoutside="() => isHovered = false"
  >
    <a>
      <span>操作</span>
      <i class="iconfont icon-trangle-down"></i>
    </a>

    <div
      class="dropdown-menu is-right"
      style="min-width: 120px; padding-top: 0"
      :class="isHovered && 'is-active'"
    >
      <div class="dropdown-content">
        <a class="dropdown-item">
          积分调整
        </a>
        <a class="dropdown-item">
          积分记录
        </a>
      </div>
    </div>
  </td>
</template>

<script>
export default {
  name: 'ListDropdown',
  data: () => ({
    isHovered: false
  })
}
</script>
