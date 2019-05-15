<template>
  <Promise tag="div" class="container" :handler="getDataSource">
    <div class="field has-addons">
      <div class="control">
        <input type="text" class="input" placeholder="ID / Email / Username">
      </div>
      <div class="control">
        <a class="button is-info">
          <span class="icon">
            <i class="iconfont icon-search"></i>
          </span>
        </a>
      </div>
    </div>
    <table class="table is-hoverable is-centered is-fullwidth" style="margin-bottom: 1rem">
      <thead>
        <th>用户ID</th>
        <th>姓名</th>
        <th>地址</th>
        <th>联系电话</th>
        <th>电子邮箱</th>
        <th class="has-text-danger">ログインパス</th>
        <th>注册日期</th>
        <th class="has-text-danger">紹介コード</th>
        <th class="has-text-danger">亚马逊账户</th>
        <th>当前积分</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="user in dataSource.data" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.address}}</td>
          <td>{{user.mobile}}</td>
          <td>{{user.email}}</td>
          <td></td>
          <td>
            <TimeWrapper :value="user.created_at" />
          </td>
          <td></td>
          <td></td>
          <AnchorWrapper @click="handlePointsClick(user.id)">
            <span>
              {{user.points}}
            </span>
          </AnchorWrapper>
          <ListDropdown></ListDropdown>
        </tr>
      </tbody>
    </table>
    <Pagination @change="changePage" v-bind="dataSource"/>
    <router-view />
  </Promise>
</template>

<script>
import { getUsers } from '@/api/open'
import ListDropdown from './ListDropdown'
import Pagination from '@/components/Pagination'
import TimeWrapper from '@/components/TimeWrapper'
import AnchorWrapper from '@/components/AnchorWrapper'

export default {
  name: 'AdminUsersList',
  components: {
    Pagination,
    TimeWrapper,
    ListDropdown,
    AnchorWrapper
  },
  data () {
    return {
      page: 1,
      pageSize: 10,
      dataSource: {
        data: [],
        page: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    getDataSource () {
      const handleThen = response => {
        this.dataSource = response.data
      }
      const params = {
        page: this.page,
        pageSize: this.pageSize
      }

      return getUsers(params).then(handleThen)
    },
    changePage (page) {
      this.page = page
      this.getDataSource()
    },
    handlePointsClick (id) {
      this.$router.push({
        name: 'admin user points purchase',
        params: { id }
      })
    }
  }
}
</script>
