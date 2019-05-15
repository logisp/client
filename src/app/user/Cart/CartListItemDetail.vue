<template>
  <ModalCard
    cardStyle="width: auto; min-width: 400px"
    :show="isShow"
    :title="'详细信息'"
    :handler="handleUpdate"
    confirm="保存"
    @close="isShow = false"
  >
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="label">
            <label>出库路径</label>
          </div>
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Amazon</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">ASIN</div>
          <div class="control">
            <input v-model="data.asin" type="text" class="input">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">
            <label>SKU</label>
          </div>
          <div class="control">
            <input v-model="data.sku" type="text" class="input">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label has-text-danger">*商品代码</div>
          <div class="control">
            <input v-model="data.amazon_good_id" type="text" class="input">
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="label">使用情况</div>
          <div class="control">
            <div class="select is-fullwidth">
              <select v-model="data.usage_degree">
                <option value="new">新品</option>
                <option>二手 - 九成新</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">
            <label>入手价格</label>
          </div>
          <div class="control">
            <input v-model="data.buying_price" type="number" class="input">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">
            <label>出手价格</label>
          </div>
          <div class="control">
            <input v-model="data.selling_price" type="number" class="input">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="label">
            商品摄影
          </div>
          <div class="control">
            <div class="select is-fullwidth">
              <select v-model="data.shooting_quantity">
                <option :value="0">不需要</option>
                <option :value="1">1 张</option>
                <option :value="2">2 张</option>
                <option :value="3">3 张</option>
              </select>
            </div>
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
        <textarea v-model="data.description" class="textarea"></textarea>
      </div>
    </div>
    <div class="field is-horizontal">
      <div
        class="control"
        style="margin-right: 1rem; margin-left: -0.25rem"
      >
        <Checkbox v-model="data.is_to_produce_on_amazon">
          <span>是否在亚马逊出品</span>
        </Checkbox>
      </div>
      <div
        class="control"
        style="margin-right: 1rem"
      >
        <Checkbox v-model="data.is_to_check_appendant">
          <span>附属品确认</span>
        </Checkbox>
      </div>
      <div
        class="control"
        style="margin-right: 1rem"
      >
        <Checkbox v-model="data.is_to_check">
          <span class="has-text-danger">*商品确认</span>
        </Checkbox>
      </div>
      <div
        class="control"
        style="margin-right: 1rem"
      >
        <Checkbox v-model="data.is_to_clean">
          <span>商品清洗</span>
        </Checkbox>
      </div>
      <div
        class="control"
        style="margin-right: 1rem"
      >
        <Checkbox v-model="data.is_to_repack">
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
          class="textarea"
          v-model="data.repack_remark"
        ></textarea>
      </div>
    </div>
  </ModalCard>
</template>

<script>
import ModalCard from '@/components/ModalCard'

export default {
  name: 'CartListItemDetail',
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
