<template>
  <div class="container">
    <div class="goods-list">
      <div class="list-header">
        <div class="col col-check">
          <input class="check-box" type="checkbox">全选
        </div>
        <div class="col col-img">&nbsp;</div>
        <div class="col col-name">商品名称</div>
        <div class="col col-price">单价</div>
        <div class="col col-num">数量</div>
        <div class="col col-total">小计</div>
        <div class="col col-action">操作</div>
      </div>
      <div class="list-content">
        <div class="col col-check">
          <input class="check-box" type="checkbox">
        </div>
        <div class="col col-img">
          <div class="img-wrapper">
            <img class="img" src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560222640.90428593.jpg?thumb=1&w=80&h=80">
          </div>
        </div>
        <div class="col col-name"> 小米「小爱老师」 4G网络尊享版 白色 </div>
        <div class="col col-price">899元</div>
        <div class="col col-num">
          <div class="iconfont mp">&#xe61b;</div>
          <input class="num-input" type="text">
          <div class="iconfont mp">&#xe601;</div>
        </div>
        <div class="col col-total">1798元</div>
        <div class="col col-action">
          <div class="iconfont">&#xe667;</div>
        </div>
      </div>
    </div>
    <div class="shopping-bottom">
      <div class="total-price">合计0元</div>
      <div class="checkout">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingList'
}
</script>

<style lang="stylus" scoped>
  .container
    background: #f5f5f5
    padding: .4rem 1.5rem 0 1.5rem
    height: 8rem
    .goods-list
      background: #fff
    .shopping-bottom
      overflow: hidden
      background: #fff
      margin: .2rem 0
      padding-left: 10rem
      .checkout
        width: 2rem
        height: .5rem
        font-size: .24rem
        line-height: .5rem
        background: #ff6700
        color: #fff
        text-align: center
        float: right
      .total-price
        font-size: .2rem
        color: #ff6700
        float: left
        padding: .2rem 0
    .list-header
      font-size: .16rem
      height: .7rem
      line-height: .7rem
      padding-right: .26rem
      color: #424242
    .list-content
      font-size: .2rem
      height: .856rem
      padding: .15rem .26rem .15rem 0
      .col
        padding: .3rem 0
      .col-img
        padding: 0
      .col-name
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      .col-total
        color: #ff6700
        padding: .3rem 1.4rem 0 0
      .img-wrapper
        width: .8rem
        height: .8rem
        overflow: hidden
        .img
          width: 100%
.col
  float: left
.col-check
  width: 1.1rem
.col-img
  width: 1.2rem
.col-name
  width: 3.8rem
.col-price
  width: 1.4rem
  padding-right: .2rem
.col-num
  width: 1.5rem
  text-align: center
.col-total
  width: 1.2rem
  padding-right: 1.2rem
  text-align: right
.col-action
  width: .8rem
.check-box
  width: 18px
  height: 18px
.mp
  width: .28rem
  height: .28rem
  float: left
.num-input
  width: .8rem
  float: left
  border: 1px solid #e0e0e0
</style>
