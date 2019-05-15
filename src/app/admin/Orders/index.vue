<template>
  <Promise tag="div" class="container" :handler="getDataSource" ref="promise">
    <Header
      :multiSelected="multiSelected"
    />
    <OrderList
      :length="list.length"
      :multiSelected="multiSelected"
      @selectAll="$handleMultiSelectAll(multiSelected, list)"
    >
      <OrderListItem
        v-for="id in list" :key="id"
        v-bind="data[id]"
        :isMultiSelected="multiSelected.indexOf(id) !== -1"
        :multiSelected="multiSelected"
        @detail="$refs.detail.show(data[id])"
        @confirm="$refs.confirm.show(data[id])"
        @inbound="$refs.inbound.show(data[id])"
        @inbounded="$refs.inbounded.show(data[id])"
        @delete="handleDelete([id])"
      />
    </OrderList>
    <OrderListItemDetail ref="detail" />
    <OrderListItemInbounded ref="inbounded" />
    <OrderListItemConfirm :handler="handleConfirm" ref="confirm" />
    <OrderListItemInbound :handler="handleInbound" ref="inbound" />
  </Promise>
</template>

<script>
import Header from './Header'
import OrderList from './OrderList'
import OrderListItem from './OrderListItem'
import OrderListItemDetail from './OrderListItemDetail'
import OrderListItemInbound from './OrderListItemInbound'
import OrderListItemConfirm from './OrderListItemConfirm'
import OrderListItemInbounded from '@/app/common/OrderListItemInbounded'
import { orderAdminSearch, orderInbound } from '@/api/open'

export default {
  name: 'AdminOrderManage',
  components: {
    Header,
    OrderList,
    OrderListItem,
    OrderListItemDetail,
    OrderListItemInbound,
    OrderListItemConfirm,
    OrderListItemInbounded
  },
  data () {
    return {
      list: [],
      data: {},
      multiSelected: [],
      isLoading: false
    }
  },
  methods: {
    getDataSource () {
      const handleThen = response => {
        const data = {}
        const list = []
        response.data.forEach(item => {
          list.push(item.id)
          data[item.id] = item
        })
        this.data = data
        this.list = list
      }
      const handleCatch = () => {

      }
      const handleFinally = () => {
        this.isLoading = false
      }
      this.isLoading = true
      orderAdminSearch()
        .then(handleThen)
        .catch(handleCatch)
        .finally(handleFinally)
    },
    handleInbound (order_ids, params) {
      const handleThen = response => {
        order_ids.forEach(id => {
          for (let key in params) {
            this.data[id][key] = params[key]
            this.data[id].status = 'inbounded'
          }
        })
      }
      return orderInbound({ order_ids, ...params })
        .then(handleThen)
    },
    handleConfirm (order_ids, params) {
      const status = params.is_unexpected_confirmed
        ? 'unexpected' : 'confirming'
      const handleThen = response => {
        order_ids.forEach(id => {
          for (let key in params) {
            this.data[id][key] = params[key]
            this.data[id].status = status
          }
        })
      }
      return orderInbound({ order_ids, ...params })
        .then(handleThen)
    }
  }
}
</script>
