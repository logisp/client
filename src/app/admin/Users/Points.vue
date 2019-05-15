<template>
  <div class="container" style="width: 1000px">
    <nav class="breadcrumb has-arrow-separator">
      <ul>
        <li><a @click="() => $router.back()">用户列表</a></li>
        <li class="is-active"><a href="#" aria-current="page">积分信息</a></li>
      </ul>
    </nav>
    <div class="columns">
      <div class="column is-narrow" style="min-width: 280px">
        <div class="box" style="border-radius: 0">
          <span class="icon">
            <i class="iconfont icon-user"></i>
          </span>
          <span>&nbsp;</span>
          <span>
            <label style="font-size: 1.25rem">root</label>
          </span>

          <div></div>

          <span class="icon">
            <i class="iconfont icon-mail"></i>
          </span>
          <span>&nbsp;</span>
          <span>
            <label style="font-size: 1.25rem">root@logisp.com</label>
          </span>
        </div>
        <div class="box" style="border-radius: 0">
          <aside class="menu">
            <ul class="menu-list">
              <li><a class="is-active">积分详情</a></li>
              <li><a>交费记录</a></li>
              <li><a>消费记录</a></li>
              <li><a>积分调整</a></li>
            </ul>
          </aside>
        </div>
      </div>
      <div class="column">
        <div class="box" style="border-radius: 0; height: 400px">
          <p class="title is-4">账户信息</p>
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminUserPoints',
  methods: {

  }
}
</script>
