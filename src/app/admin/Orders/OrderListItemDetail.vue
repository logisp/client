<template>
  <ModalCard
    cardStyle="width: auto"
    :show="isShow"
    :handler="handleUpdate"
    :hasConfirm="false"
    confirm="保存"
    @close="isShow = false"
  >
    <p class="has-text-danger" slot="title">
      *订单信息（不可修改）
    </p>
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="label">
            <label>出库路径</label>
          </div>
          <div class="control">
            <input
              :value="data.outbound_method"
              type="text" class="input" readonly
            >
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">ASIN</div>
          <div class="control">
            <input :value="data.asin" type="text" class="input" readonly>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">
            <label>SKU</label>
          </div>
          <div class="control">
            <input :value="data.sku" type="text" class="input" readonly>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label has-text-danger">*商品代码</div>
          <div class="control">
            <input :value="data.amazon_good_id" type="text" class="input" readonly>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="label">使用情况</div>
          <div class="control">
            <input :value="data.usage_degree" type="text" class="input" readonly>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">
            <label>入手价格</label>
          </div>
          <div class="control">
            <input :value="data.buying_price" type="number" class="input" readonly>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">
            <label>出手价格</label>
          </div>
          <div class="control">
            <input :value="data.selling_price" type="number" class="input" readonly>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">
            商品摄影
          </div>
          <div class="control">
            <input :value="data.shooting_quantity" type="text" class="input" readonly>
          </div>
        </div>
      </div>
    </div>
    <div class="field">
      <div class="label">商品描述</div>
      <div
        class="control"
        style="margin-right: 1rem"
      >
        <textarea :value="data.description" class="textarea" readonly></textarea>
      </div>
    </div>
    <div class="field is-horizontal">
      <div
        class="control"
        style="margin-right: 1rem; margin-left: -0.25rem"
      >
        <Checkbox :value="data.is_to_produce_on_amazon">
          <span>是否在亚马逊出品</span>
        </Checkbox>
      </div>
      <div
        class="control"
        style="margin-right: 1rem"
      >
        <Checkbox :value="data.is_to_check_appendant">
          <span>附属品确认</span>
        </Checkbox>
      </div>
      <div
        class="control"
        style="margin-right: 1rem"
      >
        <Checkbox :value="data.is_to_check">
          <span class="has-text-danger">*商品确认</span>
        </Checkbox>
      </div>
      <div
        class="control"
        style="margin-right: 1rem"
      >
        <Checkbox :value="data.is_to_clean">
          <span>商品清洗</span>
        </Checkbox>
      </div>
      <div
        class="control"
        style="margin-right: 1rem"
      >
        <Checkbox :value="data.is_to_repack">
          <span>重新包装</span>
        </Checkbox>
      </div>
    </div>
    <div
      class="field"
      v-show="data.is_to_repack"
    >
      <div class="label">
        <label>包装备注</label>
      </div>
      <div class="control">
        <textarea
          :value="data.repack_remark"
          class="textarea"
          readonly
        ></textarea>
      </div>
    </div>
  </ModalCard>
</template>

<script>
import ModalCard from '@/components/ModalCard'

export default {
  name: 'OrderListItemDetail',
  components: {
    ModalCard
  },
  props: {
    handler: {
      type: Function
    }
  },
  data () {
    return {
      isShow: false,
      data: {},
      originData: {}
    }
  },
  computed: {
    params () {
      const res = {}
      const { data, originData } = this
      for (let key in data) {
        if (data[key] !== originData[key]) {
          res[key] = data[key]
        }
      }

      return res
    }
  },
  methods: {
    show (data) {
      this.isShow = true
      this.data = data
      this.originData = { ...this.data }
    },
    handleUpdate () {
      if (Object.keys(this.params).length) {
        return this.handler(this.data.id, this.params)
      }
    }
  }
}
</script>
