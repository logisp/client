<template>
  <div class="container">
    <Header
      :multiSelected="multiSelected"
    />
    <Loader v-if="isLoading" margin-top="5rem" />
    <OrderList v-else
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
        @posting="$refs.posting.show(data[id])"
        @delete="handleDelete([id])"
        @multiSelect="$handleMultiSelect(multiSelected, id)"
      />
    </OrderList>
    <OrderListItemDetail ref="detail" />
    <OrderListItemPosting
      :handler="handlePosting"
      ref="posting" />
  </div>
</template>

<script>
import Header from './Header'
import OrderList from './OrderList'
import OrderListItem from './OrderListItem'
import OrderListItemDetail from './OrderListItemDetail'
import OrderListItemPosting from './OrderListItemPosting'
import { orderUserSearch, orderPosting, orderDelete } from '@/api/open'

export default {
  name: 'UserOrderManage',
  components: {
    Header,
    OrderList,
    OrderListItem,
    OrderListItemDetail,
    OrderListItemPosting
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
      orderUserSearch()
        .then(handleThen)
        .catch(handleCatch)
        .finally(handleFinally)
    },
    handlePosting (order_ids, params) {
      const handleThen = response => {
        order_ids.forEach(id => {
          for (let key in params) {
            this.data[id][key] = params[key]
            this.data[id].status = 'inbounding'
          }
        })
      }
      return orderPosting({ order_ids, ...params })
        .then(handleThen)
    },
    handleDelete (order_ids) {
      const handleThen = response => {
        this.$removeIds(order_ids, this.list, this.data)
      }
      const handler = () => {
        return orderDelete({ order_ids })
          .then(handleThen)
      }

      this.$confirm({
        handler,
        title: '删除确认',
        content: '订单删除后将无法恢复'
      })
    }
  },
  created () {
    this.getDataSource()
  }
}
</script>
