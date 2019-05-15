<template>
  <ModalCard
    cardStyle="width: 360px"
    confirm="保存"
    :show="isShow"
    :title="'发货登记'"
    :handler="handlePosting"
    @close="isShow = false"
  >
    <div class="field">
      <div class="label">
        <label>物流公司</label>
      </div>
      <div class="control">
        <input v-model="params.logistic_inc" type="text" class="input">
      </div>
    </div>
    <div class="field">
      <div class="label">
        <label>物流代码</label>
      </div>
      <div class="control">
        <input v-model="params.logistic_id" type="text" class="input">
      </div>
    </div>
  </ModalCard>
</template>

<script>
import ModalCard from '@/components/ModalCard'

export default {
  name: 'OrderListItemPosting',
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
        logistic_id: '',
        logistic_inc: ''
      }
    }
  },
  methods: {
    show (data) {
      this.data = data
      this.isShow = true
      this.$syncObjectValues(this.params, this.data)
    },
    handlePosting () {
      if (this.params.logistic_id && this.params.logistic_inc) {
        return this.handler([this.data.id], this.params)
      }
    }
  }
}
</script>
