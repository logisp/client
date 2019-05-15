<template>
  <table class="table is-nowrap is-centered is-fullwidth">
    <thead>
      <tr>
        <td style="width: 1px;">
          <Checkbox
            font-size="1.25rem"
            :value="checkboxValue"
            @click="$emit('selectAll')"
          />
        </td>
        <th style="width: 1px">订单状态</th>
        <th style="width: 1px">
          <span v-t="'product'"></span>
        </th>
        <th style="min-width: 500px">

        </th>
        <th>
          创建日期
        </th>
      </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'OrderList',
  props: {
    length: Number,
    multiSelected: {
      required: true,
      type: Array
    }
  },
  computed: {
    checkboxValue () {
      if (this.multiSelected.length === 0) {
        return false
      } else if (this.length === this.multiSelected.length) {
        return true
      } else {
        return 'minus'
      }
    }
  },
  methods: {
    handleCheck () {
      console.log(100)
    }
  }
}
</script>

<i18n>
zh:
  image: 图片
  asin: ASIN
  name: 商品名
  size: 尺寸
  saleOnAmazon: 上架至 Amazon
  id: 商品代码
  usageDegree: 使用情况
  sku: SKU
  breakage: 损坏情况
  outboundMethod: 出货平台
  currentPrice: 当前售价
  originPrice: 商品原价
  userRemark: 其他备注
  options: 选项
  otherFees: 其他费用
  profits: 商品利润
  goodInfo: 商品信息
  product: 商品信息
en:
  image: Image
  asin: ASIN
  name: Name
  size: Size
  saleOnAmazon: Sale On Amazon
  id: Id
  usageDegree: Usage Degree
  sku: SKU
  breakage: Breakage
  outboundMethod: Outbound Method
  currentPrice: Current Price
  originPrice: Origin Price
  userRemark: User Remark
  options: Options
  otherFees: Other Fees
  profits: Profits
  goodInfo: Good Information
  product: Product
</i18n>
