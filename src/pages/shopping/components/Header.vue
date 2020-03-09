<template>
  <div>
    <div class="side-header">
      <div class="header-logo">
        <img class="img-logo" src="./imgs/logo.png">
        <div class="header-title">我的购物车</div>
        <div class="header-desc">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingHeader'
}
</script>

<style lang="stylus" scoped>
.side-header
  position: relative
  color: #b0b0b0
  height: 1rem
  border-bottom: 2px solid #ff6700
  padding: 0 1.5rem
  .header-logo
    display: flex
    margin-top: .25rem
    .img-logo
      padding-right: .3rem
    .header-title
      margin-top: .15rem
      padding-right: .3rem
      color: #000
      font-size:  .36rem
    .header-desc
      font-size: .14rem
      position: relative
      top: .3rem
</style>
