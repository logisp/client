<template>
  <Promise tag="div" class="container" :handler="getDataSource">
    <div class="columns">
      <div class="column is-narrow">
        <RouteMenus :menus="menus" style="width: 160px" />
      </div>
      <router-view class="column" :fees="fees"></router-view>
    </div>
  </Promise>
</template>

<script>
import RouteMenus from '@/components/Menus/RouteMenus'
import { getFees } from '@/api/open'

export default {
  name: 'AdminFees',
  components: {
    RouteMenus
  },
  data () {
    return {
      fees: {},
      menus: [
        { text: '费用管理', route: { name: 'admin fees manage' } },
        { text: '调整记录', route: { name: 'admin fees records' } }
      ]
    }
  },
  methods: {
    getDataSource () {
      const handleThen = ({ data }) => {
        const reducer = (sum, fee) => (sum[fee.name] = fee, sum)
        this.fees = data.reduce(reducer, {})
      }

      return getFees().then(handleThen)
    }
  }
}
</script>
