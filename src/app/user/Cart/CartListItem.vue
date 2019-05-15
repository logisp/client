<template>
  <tr
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
  >
    <td
      style="cursor: pointer"
      @click="handleSelect"
    >
      <Checkbox
        font-size="1.25rem"
        :value="isMultiSelected"
      />
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
            <span>编辑信息</span>
          </a>
        </p>
        <!-- <p class="control">
          <a
            class="button is-light"
            @click="$emit('showGoodInfo')"
          >
            <span>售卖信息</span>
          </a>
        </p> -->
        <!-- <p class="control">
          <a
            class="button is-light"
            @click="$emit('showGoodPriceInfo')"
          >
            <span>价格信息</span>
          </a>
        </p> -->
        <p class="control">
          <a
            @click="$emit('copy')"
            class="button is-light"
          >
            <span>复制</span>
          </a>
        </p>
        <p class="control">
          <a
            @click="$emit('delete')"
            class="button is-light"
          >
            <span>删除</span>
          </a>
        </p>
        <p class="control">
          <a
            @click="$emit('order')"
            class="button is-light"
          >
            <span>下单</span>
          </a>
        </p>
      </div>
    </td>
    <td>
      <span>998 (58%)</span>
    </td>
  </tr>
</template>

<script>
import AmazonImage from '@/app/common/AmazonImage'

export default {
  name: 'CartListItem',
  components: {
    AmazonImage
  },
  props: {
    id: {
      required: true,
      type: Number
    },
    image: {
      type: String
    },
    asin: {
      type: String
    },
    name: {
      type: String
    },
    multiSelected: {
      type: Array,
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

<i18n>
zh:
  amazonMethod: Amazon
  individualMethod: 个人配送
  photograph: 摄影
  appendantConfirm: 附属品确认
  goodConfirm: 物品确认
  goodClean: 清洗
  repack: 重新包装
  repackRemarks: 包装详细备注
  amazonFreight: 亚马逊物流费
  amazonPoundage: 亚马逊手续费
  commissionFee: 服务费
en:
  amazonMethod: Amazon
  individualMethod: Individual
  photograph: Photograph
  appendantConfirm: Appendant Confirm
  goodConfirm: Good Confirm
  goodClean: Clean
  repack: Repack
  repackRemarks: Repack Remarks
  amazonFreight: Freight(Amazon)
  amazonPoundage: Poundage(Amazon)
  commissionFee: Commission Fee
jp:
  amazonMethod: Amazon
  individualMethod: 個別配送
  photograph: 写真撮影
  appendantConfirm: 付属品確認
  goodConfirm: 動作確認
  goodClean: クリーニング
  repack: セット梱包
  repackRemarks: セット梱包の詳細を記入
  amazonFreight: amazon販売手数料
  amazonPoundage: amazon配送代行手数料
  commissionFee: ロジスピ出荷作業手数料
</i18n>
