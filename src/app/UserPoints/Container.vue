<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close"></div>
    <div class="modal-card" style="width: 800px; height: 850px">
      <header class="modal-card-head" style="height: 4.8rem">
        <div class="modal-card-title">
          <p v-t="'title'"></p>
        </div>
        <div
          class="tabs is-toggle is-centered is-flex"
          style="position: absolute; justify-content: center; width: calc(100% - 1rem)"
        >
          <ul>
            <li
              v-for="tab in tabs" :key="tab.text"
              :class="{ 'is-active': tab.text === view }"
            >
              <a>
                <span v-t="tab.text"></span>
              </a>
            </li>
          </ul>
        </div>
        <button class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <Promise tag="div" :handler="getDataSource" ref="promise">
          <table class="table is-nowrap is-fullwidth is-centered">
            <thead>
              <th style="width: 1px">时间</th>
              <th>积分</th>
            </thead>
            <tbody>
              <tr v-for="record in dataSource.data" :key="record.id">
                <td>
                  <TimeWrapper :value="record.created_at"/>
                </td>
                <td>{{record.increments}}</td>
              </tr>
            </tbody>
          </table>
        </Promise>
      </section>
      <footer class="modal-card-foot is-flex" style="justify-content: center">
        <Pagination
          v-bind="dataSource"
          @change="changePage"
        />
      </footer>
    </div>
  </div>
</template>

<script>
import { getUserPointLogs } from '@/api/open'
import Pagination from '@/components/Pagination'
import TimeWrapper from '@/components/TimeWrapper'

export default {
  name: 'UserPoints',
  components: {
    Pagination,
    TimeWrapper
  },
  props: {
    view: {
      type: String,
      required: true
    },
    userId: {
      type: [String, Number, null]
    }
  },
  data: () => ({
    tabs: [
      { text: 'purchase' },
      { text: 'consumption' },
      { text: 'adjustment' }
    ],
    dataSource: {
      page: 0,
      perPage: 0,
      total: 0,
      data: []
    }
  }),
  methods: {
    close () {
      this.$router.push({
        name: 'admin users'
      })
    },
    changePage (page) {
      this.page = page
      this.$refs.promise.handle()
    },
    getDataSource () {
      const handleThen = response => {
        this.dataSource = response.data
      }
      const params = {
        type: this.view,
        page: this.page,
        user_id: this.userId
      }

      return getUserPointLogs(params)
        .then(handleThen)
    }
  }
}
</script>

<i18n>
zh:
  title: 积分明细
  purchase: 购买记录
  consumption: 花费记录
  adjustment: 调整记录
en:
  title: Points details
  purchase: Purchase
  consumption: Consumption
  adjustment: Adjustment
</i18n>
