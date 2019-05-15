<template>
  <ModalCard
    :show="show"
    :handler="handler"
    :title="title"
    :content="content"
    cardStyle="min-width: 360px; width: auto"
    @close="show = !show"
  >
  </ModalCard>
</template>

<script>
import Vue from 'vue'
import ModalCard from '@/components/ModalCard'

export default {
  name: 'Confirmer',
  components: {
    ModalCard
  },
  data () {
    return {
      content: '',
      title: '',
      show: false,
      handler: () => {}
    }
  },
  methods: {
    open ({ title, content, handler }) {
      this.title = title
      this.content = content
      this.handler = handler
      this.show = true
    }
  },
  created () {
    Vue.prototype.$confirm = this.open
  }
}
</script>
