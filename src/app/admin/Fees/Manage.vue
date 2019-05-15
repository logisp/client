<template>
  <div>
    <Title has-border-bottom>
      <span v-t="'title'"></span>
    </Title>
    <div style="height: 1rem"></div>
    <div
      class="columns"
      style="margin-bottom: 0"
      v-for="(group, index) in feeInputs" :key="index + 'input'"
    >
      <div class="column" v-for="key in group" :key="key">
        <div class="field">
          <div class="label">
            <label v-t="key"></label>
          </div>
          <div class="control">
            <input
              readonly
              type="text"
              :value="getFeePoints(key)"
              class="input fees-input"
              @click="handleFeeClick(key)"
            >
          </div>
        </div>
      </div>
    </div>

    <div style="height: 0.5rem"></div>

    <div
      class="columns"
      style="margin-bottom: 0"
      v-for="(group, index) in tables" :key="index + 'table'"
    >
      <div
        class="column"
        v-for="table in group" :key="table.text"
      >
        <div class="field">
          <div class="label">
            <label v-t="table.text"></label>
          </div>
          <div class="control">
            <table class="table is-centered is-bordered is-fullwidth">
              <thead>
                <th
                  v-for="key in table.dataSource[0]" :key="key"
                  v-t="key"
                >
                </th>
              </thead>
              <tbody>
                <tr v-for="row in table.dataSource.slice(1)" :key="row[0]">
                  <td v-t="row[0]"></td>
                  <td
                    class="fees-cell"
                    v-for="(cell, key) in row[1]" :key="key"
                    :colspan="getColspan(cell)"
                    @click="handleFeeClick(getKey(cell))"
                  >
                    {{getFeePoints([getKey(cell)])}}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Confirmer
      :handler="handleUpdatePoints"
      ref="confirmer"
    />
  </div>
</template>

<script>
import get from 'lodash/get'
import Confirmer from './Confirmer'
import { updateFeePoints } from '@/api/open'

export default {
  name: 'FeesManage',
  components: {
    Confirmer
  },
  props: {
    fees: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      feeInputs,
      idaFees,
      cleanFees,
      shootingFees,
      fbaOutboundFees,
      idaOutboundFees
    }
  },
  computed: {
    tables () {
      return [
        [
          { text: 'idaFee', dataSource: this.idaFees }
        ],
        [
          { text: 'outboundFbaFee', dataSource: this.fbaOutboundFees },
          { text: 'outboundIdaFee', dataSource: this.idaOutboundFees }
        ],
        [
          { text: 'photographFee', dataSource: this.shootingFees },
          { text: 'cleanFee', dataSource: this.cleanFees }
        ]
      ]
    }
  },
  methods: {
    handleFeeClick (key) {
      this.$refs.confirmer.show(key, this.fees[key])
    },
    handleUpdatePoints (name, points, comment) {
      const handleThen = () => {
        this.fees[name].points = points
      }
      const params = { name, points, comment }
      const handler = () => updateFeePoints(params)
        .then(handleThen)
      this.$notify({
        handler,
        type: 'success',
        text: '费用已调整'
      })
    },
    getFeePoints (key) {
      return get(this.fees, key + '.points')
    },
    getKey (cell) {
      return typeof cell === 'string' ? cell : cell.key
    },
    getColspan (cell) {
      return typeof cell === 'string' ? 1 : cell.colspan
    }
  }
}

const feeInputs = [
  ['appandant_check', 'check', 'confirm'],
  ['inbound', 'repack', 'unexpected']
]
const fbaOutboundFees = [
  ['sizeAndCondition', 'new', 'used'],
  ['standard', ['fba_outbound_standard_new', 'fba_outbound_standard_used']],
  ['large', ['fba_outbound_large_new', 'fba_outbound_large_used']],
  ['special', [ { key: 'fba_outbound_special', colspan: 2 } ]]
]
const idaOutboundFees = [
  ['sizeAndCondition', 'new', 'used'],
  ['standard', ['ida_outbound_standard_new', 'ida_outbound_standard_used']],
  ['large', ['ida_outbound_large_new', 'ida_outbound_large_used']],
  ['special', [ { key: 'ida_outbound_special', colspan: 2 } ]]
]
const idaFees = [
  ['size', 'nationwide', 'hokkaido', 'okinawa'],
  ['standard', ['ida_standard_nationwide', 'ida_standard_hokkaido', 'ida_standard_okinawa']],
  ['large', ['ida_large_nationwide', 'ida_large_hokkaido', 'ida_large_okinawa']],
  ['special', ['ida_special_nationwide', 'ida_special_hokkaido', 'ida_special_okinawa']]
]
const shootingFees = [
  ['quantity', 'fee'],
  ['onePiece', ['photograph_one']],
  ['twoPiece', ['photograph_two']],
  ['threePiece', ['photograph_three']]
]
const cleanFees = [
  ['size', 'fee'],
  ['standard', ['clean_standard']],
  ['large', ['clean_large']]
]
</script>

<style scoped>
.fees-cell:hover {
  cursor: pointer;
  background: #f2f6ff;
}
.fees-input {
  cursor: pointer;
}
</style>

<i18n>
zh:
  title: 服务费调整
  records: 调价记录
  outboundFbaFee: 发货手续费（FBA）
  outboundIdaFee: 发货手续费（个人配送）
  photographFee: 拍照费用
  cleanFee: 清洗费用
  idaFee: 配送费（个人配送）
  standard: 标准以下
  large: 大型
  special: 大型特殊
  new: 新品
  used: 二手
  piece: 张
  onePiece: 1 张
  twoPiece: 2 张
  threePiece: 3 张
  fee: 费用
  size: 规格
  quantity: 数量
  nationwide: 全国范围
  hokkaido: 北海道
  okinawa: 冲绳县或更远
  sizeAndCondition: 尺寸 / 条件
  appandant_check: 附属品确认
  repack: 重新包装
  check: 商品检查
  inbound: 收货费用
  confirm: 入库费用
  unexpected: 异常商品
jp:
  title: 服务费调整
  records: 调整记录
  outboundFbaFee: 出荷手数料(FBA)
  outboundIdaFee: 出荷手数料(個配)
  photographFee: 写真撮影
  cleanFee: クリーニング
  idaFee: 個別配送料
  standard: 標準以下
  large: 大型
  special: 大型特殊
  new: 新品
  used: 中古
  piece: 枚数
  onePiece: 1 枚
  twoPiece: 2 枚
  threePiece: 3 枚
  fee: 手数料
  size: サイズ
  quantity: 枚数
  nationwide: 全国一律
  hokkaido: 北海道
  okinawa: 沖縄県・離島
  sizeAndCondition: サイズ/コンディション
  appandant_check: 付属品確認
  repack: セット梱包
  check: 動作確認
  inbound: 荷受け手数料
  confirm: 確認在庫
  unexpected: 不明在庫
</i18n>
