<template>
  <div class="container">
    <div class="re-title">买过的人还买了</div>
    <div class="re-list">
      <el-row :gutter="20">
        <el-col
          :span="6"
          v-for="(item, index) of list"
          :key="item.id"
        >
          <div class="product-area">
            <div class="thumb">
              <img class="img" :src="item.imgUrl">
            </div>
            <h2 class="title">{{item.title}}</h2>
            <p class="price">
              <span>{{item.price}}</span>元
            </p>
            <div class="iconfont shopcart" @click="addCartItem($event,index)">&#xe62d;</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="cart-right">
      <div class="iconfont cart">
        &#xe62d;
      </div>
    </div>
    <div class="cart-num">
      <div class="num">{{shopNum}}</div>
    </div>
    <div ball-container>
      <transition-group name="drop" tag="div">
      <div
        class="ball"
        v-for="ball in balls"
        v-show="ball.show"
        :key="ball.id"
      >
      <div class="inner innerhook">&#xe62d;</div>
      </div>
      </transition-group>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ShoppingRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      balls: [{
        show: false,
        id: '1'
      }, {
        show: false,
        id: '2'
      }, {
        show: false,
        id: '3'
      }, {
        show: false,
        id: '4'
      }, {
        show: false,
        id: '5'
      }]
    }
  },
  computed: {
    shopNum () {
      return this.$store.state.shopNum
    }
  },
  methods: {
    addCartItem (event, index) {
      let shoplist = this.list[index]
      this.$emit('change', shoplist)
      this.$emit('add-to-cart', event.target)
    },
    drop (el) {

    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  padding: .4rem 1.5rem 0 1.5rem
  background: #f5f5f5
  height: auto
  .re-title
    font-size: .4rem
    text-align: center
  .ball-container
    .ball
      position: fixed
      top: 400px
      right: 50px
      z-index: 200
      &.drop-transition
        transition: all 0.4s
        .inner
          font-size: 12px
          transition: all 0.4s

.product-area
  height: 3.4rem
  text-align: center
  background: #fff
  margin-top: .2rem
  .thumb
    padding: .2rem
    .img
      width: 1.65rem
      height: 1.65rem
  .title
    margin: 0 20px 3px
    font-size: .2rem
    font-weight: 400
    text-overflow: ellipsis
    color: #212121
    overflow: hidden
    white-space: nowrap
  .price
    padding-top: .1rem
    font-size: .16rem
    margin: 0;
    color: #ff6709
.shopcart
  font-size: .2rem
  margin-top: .1rem
  cursor: pointer
.cart-right
  display: flex
  position: fixed
  top: 400px
  right: 50px
  width: 60px
  height: 60px
  border-radius: 50%
  background: #409EFF
  justify-content: center
  align-items: center
  .cart
    color: #fff
    font-size: 25px
.cart-num
  display: flex
  position: fixed
  top: 387px
  right: 47px
  width: 20px
  height: 20px
  border-radius: 50%
  background: red
  justify-content: center
  align-items: center
  .num
    color: #fff
    font-size: 12px
</style>
