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
            <div class="shop-container">
              <span class="iconfont shopcart" @click="addCartItem($event, index)">&#xe62d;</span>
            </div>
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
    <div class="ball-container">
      <transition-group
        tag="div"
        @before-enter='beforeEnter'
        @enter='enter'
        @after-enter='afterEnter'
        name="drop"
      >
      <div
        class="ball"
        v-for="ball in balls"
        v-show="ball.show"
        :key="ball.id"
      >
      <div class="inner inner-hook"></div>
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
      }],
      dropBalls: []
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
      this.$emit('addToCart', event.target)
    },
    drop (el) {
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i]
        if (!ball.show) {
          ball.show = true
          ball.el = el
          this.dropBalls.push(ball)
          return
        }
      }
    },
    beforeEnter (el) {
      let count = this.balls.length
      while (count--) {
        let ball = this.balls[count]
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect() // 获取小球的相对于视口的位移(小球高度)
          let x = -(1642 - rect.left)
          let y = -(400 - rect.top) // 负数是从左上角往下的的方向, 正数是往上
          el.style.display = ''// 清空display
          el.style.webkitTransform = `translate3d(0, ${y}px, 0)`
          console.log(el.style.webkitTransform)
          el.style.transform = `translate3d(0, ${y}px, 0)`
          // 处理内层动画
          let inner = el.getElementsByClassName('inner-hook')[0] // 使用inner-hook类来单纯被js操作
          inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`
          inner.style.transform = `translate3d(${x}px, 0, 0)`
        }
      }
    },
    enter (el, done) {
      /* eslint-disable no-unused-vars */
      let rf = el.offsetHeight // 触发重绘html
      this.$nextTick(() => {
        // 让动画效果异步执行,提高性能
        el.style.webkitTransform = 'translate3d(0, 0, 0)'
        el.style.transform = 'translate3d(0, 0, 0)'
        // 处理内层动画
        let inner = el.getElementsByClassName('inner-hook')[0] // 使用inner-hook类来单纯被js操作
        inner.style.webkitTransform = 'translate3d(0, 0, 0)'
        inner.style.transform = 'translate3d(0, 0, 0)'
        el.addEventListener('transitionend', done) // Vue为了知道过渡的完成，必须设置相应的事件监听器。
      })
    },
    afterEnter (el) {
      console.log(el)
      let ball = this.dropBalls.shift() // 完成一次动画就删除一个dropBalls的小球
      if (ball) {
        ball.show = false
        el.style.display = 'none' // 隐藏小球
      }
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
      z-index: 99
      .inner
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: red;
        transition: all 1s
      &.drop-enter-active
        transition: all 1s cubic-bezier(0.49,-0.29,.75,.41)
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
.shop-container
  margin-top: .1rem
  height: .2rem
  .shopcart
    font-size: .18rem
    cursor: pointer
.cart-right
  z-index: 50
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
