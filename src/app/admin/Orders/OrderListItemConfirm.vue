<template>
  <ModalCard
    width="360px"
    confirm="保存"
    :show="isShow"
    :title="'商品检查'"
    @close="isShow = false"
  >

  </ModalCard>
</template>

<script>
import ModalCard from '@/components/ModalCard'

export default {
  name: 'OrderListItemInbounded',
  components: {
    ModalCard
  },
  props: {
    handler: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      data: {},
      isShow: false,
      params: {
        repack_remark: '',
        checked_remark: '',
        appendant_remark: '',
        unexpected_remark: '',
        is_unexpected_confirmed: false
      }
    }
  },
  methods: {
    show (data) {
      this.data = data
      this.isShow = true
    },
    handleConfirm () {
      return this.handler([this.data.id], this.params)
    }
  }
}
</script>
