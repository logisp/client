<template>
  <ModalCard
    v-model="isShow"
    title="费用调整"
    :handler="handleUpdate"
  >
    <div class="field">
      <div class="label">
        <label>费用描述</label>
      </div>
      <div class="control">
        <input :value="fee.comment" type="text" class="input" readonly>
      </div>
    </div>
    <div class="field">
      <div class="label">
        <label>当前价格</label>
      </div>
      <div class="control">
        <input :value="fee.points" type="number" class="input" readonly>
      </div>
    </div>
    <div class="field">
      <div class="label">
        <label>新的价格</label>
      </div>
      <div class="control">
        <input v-model="params.points" type="number" class="input">
      </div>
    </div>
    <div class="field">
      <div class="label">
        <label>调价备注</label>
      </div>
      <div class="control">
        <textarea v-model="params.comment" class="textarea">
        </textarea>
      </div>
    </div>
  </ModalCard>
</template>

<script>
import ModalCard from '@/components/ModalCard'

export default {
  name: 'FeesConfirmer',
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
      key: '',
      isShow: false,
      fee: {
        points: null,
        comment: null
      },
      params: {
        points: null,
        comment: ''
      }
    }
  },
  methods: {
    show (key, fee) {
      this.key = key
      this.fee = fee
      this.isShow = true
      this.params.points = null
      this.params.comment = null
    },
    handleUpdate () {
      const { points, comment } = this.params
      if (!points && points !== 0) {
        return false
      }

      return this.handler(this.key, points, comment)
    }
  }
}
</script>
