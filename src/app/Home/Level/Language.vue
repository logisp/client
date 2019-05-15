<template>
  <div
    class="level-item"
    style="position: relative"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
  >
    <a>
      <span v-t="'language'"></span>
      <span class="icon">
        <i class="iconfont icon-trangle-down"></i>
      </span>
    </a>
    <div
      class="dropdown-menu is-right"
      style="min-width: 100px; padding-top: 0.75rem"
      :class="isHovered && 'is-active'"
    >
      <div class="dropdown-content">
        <a
          class="dropdown-item"
          :class="{ 'is-active': $i18n.locale === language.value }"
          v-for="language in languages" :key="language.value"
          @click="handleLanguageChange(language.value)"
        >
          <strong v-if="$i18n.locale === language.value">
            {{language.text}}
          </strong>
          <span v-else>
            {{language.text}}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Storage from '@/providers/storage'

export default {
  name: 'LevelLanguageSelect',
  data () {
    return {
      isHovered: false,
      languages: [
        { text: '中文', value: 'zh' },
        { text: 'English', value: 'en' },
        { text: '日语（未翻译）', value: 'jp' }
      ]
    }
  },
  computed: {
    isShowDropdown () {
      return this.isHovered.length
    }
  },
  methods: {
    handleMouseLeave () {
      setTimeout(() => {
        this.isHovered.pop()
      }, 250)
    },
    handleLanguageChange (locale) {
      this.$root.$i18n.locale = locale
      this.isHovered = false
      Storage.set('locale', locale)
    }
  }
}
</script>

<i18n>
zh:
  language: 语言
en:
  language: Language
</i18n>
