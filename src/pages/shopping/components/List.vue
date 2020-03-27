<template>
  <div class="container">
    <div class="goods-list">
      <div class="list-header">
        <div class="col col-check">
          <input
            id="all"
            class="check-box"
            type="checkbox"
            @click="selAll"
            checked>全选
        </div>
        <div class="col col-img">&nbsp;</div>
        <div class="col col-name">商品名称</div>
        <div class="col col-price">单价</div>
        <div class="col col-num">数量</div>
        <div class="col col-total">小计</div>
        <div class="col col-action">操作</div>
      </div>
      <div class="list-content"
        v-for="(item, index) of list"
        :key="item.id"
      >
        <div class="col col-check">
          <input
           class="check-box"
           type="checkbox"
           @click="item.check = !item.check"
           :checked="item.check"
          >
        </div>
        <div class="col col-img">
          <div class="img-wrapper">
            <img class="img" :src="item.imgUrl">
          </div>
        </div>
        <div class="col col-name"> {{item.title}} </div>
        <div class="col col-price">{{item.price}}元</div>
        <div class="col col-num">
          <div class="iconfont mp" @click="reduce(index)">&#xe61b;</div>
          <input class="num-input" type="text" v-model="item.count">
          <div class="iconfont mp" @click="add(index)">&#xe601;</div>
        </div>
        <div class="col col-total">{{item.price * item.count}}</div>
        <div class="col col-action">
          <div class="iconfont" @click="remove(index)">&#xe667;</div>
        </div>
      </div>
    </div>
    <div class="shopping-bottom">
      <div class="total-price">合计{{totalPrices}}元</div>
      <div class="checkout">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingList',
  props: {
    list: Array
  },
  methods: {
    add (index) {
      this.list[index].count++
    },
    reduce (index) {
      if (this.list[index].count > 1) {
        this.list[index].count--
      }
    },
    remove (index) {
      this.list.splice(index, 1)
    },
    selAll () {
      let isAll = document.querySelector('#all')
      if (isAll.checked === true) {
        this.list.forEach(function (item, index) {
          item.check = true
        })
      } else {
        this.list.forEach(function (item, index) {
          item.check = false
        })
      }
    }
  },
  computed: {
    totalPrices () {
      let totalPrices = 0
      this.list.forEach((val, index) => {
        if (val.check === true) {
          totalPrices += parseFloat(val.price * val.count)
        }
      })
      return totalPrices.toString().replace(/\B(?=(\d{3})+$)/g, ',') // 每三位加一个 ','
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    padding: .4rem 1.5rem 0 1.5rem
    height: auto
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
  position: relative
  top: .06rem
  width: .28rem
  height: .28rem
  float: left
  cursor: pointer
.num-input
  width: .8rem
  text-align: center
  float: left
  border: 1px solid #e0e0e0
</style>
