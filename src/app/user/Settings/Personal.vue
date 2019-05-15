<template>
  <Promise tag="div" :handler="getDataSource">
    <Title has-border-bottom>个人信息</Title>
    <div class="field">
      <div class="label">
        <label>姓名</label>
      </div>
      <div class="control">
        <input v-model="params.name" type="text" class="input">
      </div>
    </div>
    <div class="field">
      <div class="label">
        <label>联系电话</label>
      </div>
      <div class="control">
        <input v-model="params.mobile" type="text" class="input">
      </div>
    </div>
    <div class="field">
      <div class="label">
        <label>邮政编码</label>
      </div>
      <div class="control">
        <input v-model="params.zipcode" type="text" class="input">
      </div>
    </div>
    <div class="field">
      <div class="label">
        <label>联系地址</label>
      </div>
      <div class="control">
        <textarea v-model="params.address" cols="30" rows="4" class="textarea"></textarea>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <a
          @click="handleUpdate"
          class="button is-info"
          :class="{ 'is-loading': isUpdating }"
        >更新信息</a>
      </div>
    </div>
  </Promise>
</template>

<script>
import { getUserPersonal, updateUserPersonal } from '@/api/open'

export default {
  name: 'UserProfilePersonal',
  data () {
    return {
      isLoading: false,
      isUpdating: false,
      dataSource: {},
      params: {
        name: '',
        mobile: '',
        address: '',
        zipcode: ''
      }
    }
  },
  methods: {
    getDataSource () {
      const handleThen = response => {
        this.dataSource = response.data
      }

      return getUserPersonal().then(handleThen)
    },
    handleUpdate () {
      this.isUpdating = true
      const handler = () => updateUserPersonal(this.params)
        .finally(() => this.isUpdating = false)
      this.$notify({
        handler,
        type: 'success',
        text: '个人信息已修改'
      })
    }
  },
  watch: {
    dataSource (data) {
      for (let key in this.params) {
        this.params[key] = data[key]
      }
    }
  }
}
</script>
