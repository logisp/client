<template>
  <div class="container" style="width: 400px">
    <Title>汇款确认</Title>
    <div class="field">
      <div class="label">
        <label>汇款名称</label>
      </div>
      <div class="control">
        <input type="text" class="input">
      </div>
    </div>
    <div class="field">
      <div class="label">
        <label>交易金额</label>
      </div>
      <div class="control">
        <input type="number" class="input">
      </div>
    </div>
    <div class="field">
      <div class="label">
        <label>汇款日期</label>
      </div>
      <div class="control">
        <input type="text" class="input">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <a class="button is-info">提交</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPurchase',
  data: () => ({

  })
}
</script>
