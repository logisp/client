<template>
  <div>
    <Title has-border-bottom>
      <span class="has-text-danger">
        邮箱设置
      </span>
    </Title>
    <div class="field">
      <div class="label is-flex">
        <label>电子邮箱</label>
        <div class="is-flex-auto"></div>
        <a>邮箱认证</a>
      </div>
      <div class="control">
        <input type="text" class="input">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <a class="button is-info">更换邮箱</a>
      </div>
    </div>

    <div style="height: 2rem"></div>

    <Title has-border-bottom>
      <span class="has-text-danger">
        密码修改
      </span>
    </Title>
    <div class="field">
      <div class="label">
        <label>当前密码</label>
      </div>
      <div class="control">
        <input type="password" class="input">
      </div>
    </div>
    <div class="field">
      <div class="label">
        <label>新密码</label>
      </div>
      <div class="control">
        <input type="password" class="input">
      </div>
    </div>
    <div class="field">
      <div class="label">
        <label>密码确认</label>
      </div>
      <div class="control">
        <input type="password" class="input">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <a class="button is-info">更换密码</a>
      </div>
    </div>

    <div style="height: 2rem"></div>

    <Title has-border-bottom>账户信息</Title>
    <div class="field">
      <div class="label">
        <label>用户 Id</label>
      </div>
      <div class="control field has-addons">
        <div class="control is-expanded">
          <input type="text" class="input" readonly>
        </div>
        <div class="control">
          <a class="button is-static">不可修改</a>
        </div>
      </div>
    </div>
    <div class="field">
      <div class="label">
        <label>注册日期</label>
      </div>
      <div class="control">
        <input type="text" class="input" readonly>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSettingsAccount'
}
</script>
