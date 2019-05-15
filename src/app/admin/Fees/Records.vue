<template>
  <Promise tag="div" :handler="getDataSource" ref="promise">
    <Title has-border-bottom>服务费修改记录</Title>
    <div style="height: 0.25rem"></div>
    <table class="table is-fullwidth is-centered">
      <thead>
        <th>修改时间</th>
        <th>费用描述</th>
        <th>费用价格</th>
        <th>备注</th>
        <th>修改人</th>
      </thead>
      <tbody>
        <tr v-for="(item, key) in dataSource.data" :key="key">
          <td>
            <TimePrinter :value="item.created_at"/>
          </td>
          <td>{{fees[item.name].comment}}</td>
          <td>{{item.points}}</td>
          <td>{{item.comment}}</td>
          <td>{{item.admin_id}}</td>
        </tr>
      </tbody>
    </table>
    <Pagination
      style="width: 100%"
      :page="dataSource.page"
      :total="dataSource.total"
      :pageSize="dataSource.pageSize"
      @change="handleChangePage"
    />
  </Promise>
</template>

<script>
import TimePrinter from '@/app/common/TimePrinter'
import Pagination from '@/components/Pagination'
import { getFeeLogs } from '@/api/open'

export default {
  name: 'FeeRecords',
  components: {
    Pagination,
    TimePrinter
  },
  props: {
    fees: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isShow: false,
      isLoading: false,
      params: {
        name: null,
        page: 1,
        pageSize: 20
      },
      dataSource: {
        page: 0,
        pageSize: 0,
        total: 0,
        data: []
      }
    }
  },
  methods: {
    show () {
      this.isShow = true
      this.getDataSource()
    },
    getDataSource () {
      const handleThen = response => {
        this.dataSource = response.data
      }
      const handleFinally = () => {
        this.isLoading = false
      }
      this.isLoading = true
      return getFeeLogs(this.params)
        .then(handleThen)
        .finally(handleFinally)
    },
    handleChangePage (page) {
      this.params.page = page
      this.$refs.promise.handle()
    }
  }
}
</script>
