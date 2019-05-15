<template>
  <ModalCard
    confirm="保存"
    :show="isShow"
    :title="'确认收货'"
    :handler="handleInbound"
    @close="isShow = false"
    cardStyle="width: 400px"
  >
    <div class="field">
      <div class="label">
        <label>入库备注</label>
      </div>
      <div class="control">
        <textarea
          v-model="params.inbound_remark"
          class="textarea"
          type="text"
        ></textarea>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <Checkbox
          v-model="params.is_unexpected_inbounded"
          style="margin-left: -5px"
        >
          是否异常入库
        </Checkbox>
      </div>
    </div>
  </ModalCard>
</template>

<script>
import ModalCard from '@/components/ModalCard'

export default {
  name: 'OrderListItemInbound',
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
        inbound_remark: '',
        is_unexpected_inbounded: false
      }
    }
  },
  methods: {
    show (data) {
      this.data = data
      this.isShow = true
      this.$syncObjectValues(this.params, this.data)
      if (this.data.status === 'posting') {
        this.params.is_unexpected_inbounded = true
      }
    },
    handleInbound () {
      return this.handler([this.data.id], this.params)
    }
  }
}
</script>
