<template>
  <div class="service-box">
    <div class="icon">
      <div class="iconfont img">&#xe632;</div>
      <div class="desc">手机app</div>
    </div>
    <div class="icon">
      <div class="iconfont img">&#xe62c;</div>
      <div class="desc">个人中心</div>
    </div>
    <div class="icon">
      <div class="iconfont img">&#xe600;</div>
      <div class="desc">售后服务</div>
    </div>
    <div class="icon">
      <div class="iconfont img">&#xe60c;</div>
      <div class="desc">人工客服</div>
    </div>
    <router-link tag="div" class="icon" to="/shopping">
      <div class="iconfont img">&#xe62d;</div>
      <div class="desc">购物车</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeService'
}
</script>

<style lang="stylus" scoped>
.service-box
  position: fixed
  top: 2.12rem
  right: 0
  width: .84rem
  height: 4.2rem
  background: #fff
  .icon
    height: .65rem
    padding-top: .2rem
    color: #757575
    text-align: center
    cursor: pointer
    .img
      font-size: .3rem
    .desc
      font-size: .16rem
      padding-top: .1rem
</style>
