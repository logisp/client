<template>
  <tr
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
  >
    <td>
      <div style="height: 4px"></div>
      <span>{{id}}</span>
      <div style="height: 12px"></div>
      <OrderStatus :value="status"/>
    </td>
    <td style="width: 1px">
      <AmazonImage />
    </td>
    <td style="text-align: left; width: 1px">
      <div style="height: 4px"></div>
        <span>相当暴躁的辣条</span>
        &nbsp;&nbsp;&nbsp;
        <span>ASIN: {{asin}}</span>
        &nbsp;&nbsp;&nbsp;
        <span>商品规格：不大也不小</span>
      <div style="height: 12px"></div>
      <div
        v-show="!isShowButtons"
        style="height: 40px; display: flex; align-items: center;"
      >
        <span>当前售价：</span>
        <span>5毛 ~ 1块</span>
        &nbsp;&nbsp;&nbsp;
        <span>商城：</span>
        <span>Amazon</span>
      </div>
      <div
        v-show="isShowButtons"
        class="field has-addons"
        style="height: 40px; display: flex; align-items: center;"
      >
        <p class="control">
          <a
            class="button is-light"
            @click="$emit('detail')"
          >
            <span>详细信息</span>
          </a>
        </p>
        <p class="control">
          <a
            v-show="status === 'posting' || status === 'inbounding'"
            @click="$emit('inbound')"
            class="button is-light"
          >
            <span>确认收货</span>
          </a>
        </p>
        <p class="control">
          <a
            v-show="status !== 'posting' && status !== 'inbounding'"
            @click="$emit('inbounded')"
            class="button is-light"
          >
            <span>入库信息</span>
          </a>
        </p>
        <p class="control">
          <a
            v-show="status === 'inbounded' || status === 'confirming'"
            @click="$emit('confirm')"
            class="button is-light"
          >
            <span>商品检查</span>
          </a>
        </p>
      </div>
    </td>
    <td>
      <OrderTime :value="created_at" />
    </td>
  </tr>
</template>

<script>
import OrderTime from '@/app/common/OrderTime'
import OrderStatus from '@/app/common/OrderStatus'
import AmazonImage from '@/app/common/AmazonImage'

export default {
  name: 'CartListItem',
  components: {
    OrderTime,
    OrderStatus,
    AmazonImage
  },
  props: {
    user_id: {
      required: true
    },
    id: {
      required: true,
      type: Number
    },
    asin: {
      type: String
    },
    name: {
      type: String
    },
    status: {
      type: String
    },
    multiSelected: {
      type: Array,
      required: true
    },
    created_at: {
      type: String,
      required: true
    },
    isFocused: {
      type: Boolean
    }
  },
  data () {
    return {
      isHovered: false
    }
  },
  computed: {
    isMultiSelected () {
      return this.multiSelected.indexOf(this.id) !== -1
    },
    isShowButtons () {
      return (this.isFocused || this.isHovered) && !this.multiSelected.length
    }
  },
  methods: {
    handleSelect (value) {
      this.$emit('multiSelect', this.id)
    }
  }
}
</script>
