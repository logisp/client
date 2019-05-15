<template>
  <ModalCard
    width="360px"
    confirm="保存"
    :show="isShow"
    :title="'确认收货'"
    :hasConfirm="false"
    @close="isShow = false"
  >
    <div class="field">
      <div class="label">
        <label>入库备注</label>
      </div>
      <div class="control">
        <textarea
          :value="data.inbound_remark"
          class="textarea"
          type="text"
          readonly
        ></textarea>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <Checkbox
          :value="data.is_unexpected_inbounded"
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
  name: 'OrderListItemInbounded',
  components: {
    ModalCard
  },
  data () {
    return {
      data: {},
      isShow: false
    }
  },
  methods: {
    show (data) {
      this.data = data
      this.isShow = true
    }
  }
}
</script>
