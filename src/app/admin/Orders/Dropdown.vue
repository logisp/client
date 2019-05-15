<template>
  <div
    class="dropdown"
    :class="isDropdownActive && 'is-active'"
    @click="handleDropdownClick"
    v-clickoutside="handleDropdownMenuClickOutside"
  >
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>{{currentOption}}</span>
        <span class="icon is-small">
          <i class="iconfont icon-trangle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu">
      <div class="dropdown-content">
        <a
          v-for="option in options" :key="option.text"
          class="dropdown-item"
          :class="option.text === currentOption && 'is-active'"
          @click.stop="handleClick(option)"
        >
          {{option.text}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    options: [
      { text: '全部订单' },
      { text: '未发货' },
      { text: '已发货' },
      { text: '已入库' },
      { text: '已检查' }
    ],
    currentOption: '全部订单',
    isDropdownActive: false
  }),
  methods: {
    handleDropdownClick () {
      this.isDropdownActive = !this.isDropdownActive
    },
    handleDropdownMenuClickOutside () {
      this.isDropdownActive = false
    },
    handleClick (option) {
      this.currentOption = option.text
      this.isDropdownActive = false
    }
  }
}
</script>
