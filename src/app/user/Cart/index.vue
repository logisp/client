<template>
  <div class="container">
    <Header
      :multiSelected="multiSelected"
      @order="handleCartOrder(multiSelected)"
      @search="handleSearch"
      @delete="handleCartDelete(multiSelected)"
    />
    <Loader v-if="isLoading" margin-top="5rem" />
    <CartList v-else
      :length="list.length"
      :multiSelected="multiSelected"
      @selectAll="$handleMultiSelectAll(multiSelected, list)"
    >
      <CartListItem
        v-for="id in list" :key="id"
        v-bind="data[id]"
        :multiSelected="multiSelected"
        @copy="handleCartAdd({...data[id]}, true)"
        @order="handleCartOrder([id])"
        @multiSelect="$handleMultiSelect(multiSelected, id)"
        @delete="handleCartDelete([id])"
        @detail="handleShowItemDetail(id)"
      />
    </CartList>
    <CartListItemDetail
      :handler="handleCartUpdate"
      ref="item"
    />
  </div>
</template>

<script>
import Header from './Header'
import CartList from './CartList'
import CartListItem from './CartListItem'
import CartListItemDetail from './CartListItemDetail'
import { cartGet, cartAdd, cartOrder, cartDelete, cartUpdate } from '@/api/open'

export default {
  name: 'Cart',
  components: {
    Header,
    CartList,
    CartListItem,
    CartListItemDetail
  },
  data () {
    return {
      isLoading: false,
      data: {},
      list: [],
      multiSelected: []
    }
  },
  methods: {
    handleSearch () {
      this.handleCartAdd({ asin: '1234656' })
    },
    handleShowItemDetail (id) {
      this.$refs.item.show(this.data[id])
    },
    getDataSource () {
      const handleThen = response => {
        const { list, data } = response.data
        const tmp = {}
        data.forEach(item => {
          tmp[item.id] = item
        })
        this.data = tmp
        this.list = list
      }
      const handleCatch = () => {

      }
      const handleFinally = () => {
        this.isLoading = false
      }
      this.isLoading = true
      cartGet()
        .then(handleThen)
        .catch(handleCatch)
        .finally(handleFinally)
    },
    handleCartAdd (data, copy = false) {
      if (data.id) {
        delete data.id
      }

      const handleThen = response => {
        const { data: { data } } = response
        this.list.push(data.id)
        this.$set(this.data, data.id, data)
      }
      const handleCatch = () => {

      }
      const handleFinally = () => {

      }
      const handler = () => cartAdd({ data })
        .then(handleThen)
        .catch(handleCatch)
        .finally(handleFinally)

      this.$confirm({
        handler,
        title: copy ? '复制商品' : '添加商品',
        content: copy ? '根据当前商品信息进行复制操作' : '在购物车中添加一件商品（测试）'
      })
    },
    handleCartDelete (ids) {
      const handleThen = () => this.removeIds(ids)
      const handler = () => cartDelete({ cart_ids: ids }).then(handleThen)
      this.$confirm({
        handler,
        title: '删除确认',
        content: '删除后将无法恢复'
      })
    },
    handleCartUpdate (id, data) {
      const handleThen = response => {
        for (let key in data) {
          this.data[id][key] = data[key]
        }
      }

      return cartUpdate({ id, data })
        .then(handleThen)
    },
    handleCartOrder (ids) {
      const handleThen = () => this.removeIds(ids)
      const handler = () => this.$notify({
        type: 'success',
        text: '商品订单已创建',
        handler: () => cartOrder({ cart_ids: ids }).then(handleThen)
      })

      this.$confirm({
        handler,
        title: '下单确认',
        content: '创建当前商品的订单'
      })
    },
    removeIds (IDS) {
      const ids = [...IDS]
      const { list, multiSelected, data } = this

      ids.forEach(id => {
        const index = multiSelected.indexOf(id)
        if (index !== -1) {
          multiSelected.splice(index, 1)
        }
        list.splice(list.indexOf(id), 1)
        this.$delete(data, id)
      })
    }
  },
  created () {
    this.getDataSource()
  }
}
</script>
