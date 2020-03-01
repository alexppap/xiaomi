<template>
  <div class="container">
    <div class="box">
      <div class="header">小米闪购</div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="product-area">
            <div class="con-tit">
              抢购
            </div>
            <img class="img" src="./imgs/lightning.png">
          <div class="desc">距离结束还有</div>
          <div class="time-wrapper">
            <div class="time-box">{{hour}}</div>
            <i class="ii">:</i>
            <div class="time-box">{{minute}}</div>
            <i class="ii">:</i>
            <div class="time-box">{{second}}</div>
          </div>
          </div>
        </el-col>
        <el-col
          :span="6"
          v-for="item of cutTimeList"
          :key="item.id"
        >
          <div class="product-area">
            <div class="thumb">
              <img class="img" :src="item.imgUrl">
            </div>
            <h3 class="title">{{item.title}}</h3>
            <p class="desc">{{item.desc}}</p>
            <p class="price">
              <span>{{item.price}}</span>元
              <del>{{item.delprice}}</del>
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
    <img alt="test" height="120" width="100%" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/11fc2ced4d8b5a924633f9a5b59f9fd2.jpg?thumb=1&amp;w=1533&amp;h=150&amp;f=webp&amp;q=90">
  </div>
</template>

<script>

export default {
  name: 'HomeCuttime',
  props: {
    cutTimeList: Array
  },
  data () {
    return {
      hours: 1,
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    num (n) {
      return n < 10 ? '0' + n : '' + n
    },
    cutTimeDown () {
      var that = this
      var timer = window.setInterval(function () {
        if (that.seconds === 0 && that.minutes !== 0) {
          that.seconds = 59
          that.minutes -= 1
        } else if (that.hours !== 0 && that.minutes === 0 && that.seconds === 0) {
          that.seconds = 59
          that.minutes = 59
          that.hours -= 1
        } else if (that.hours === 0 && that.minutes === 0 && that.seconds === 0) {
          that.seconds = 0
          window.clearInterval(timer)
        } else {
          that.seconds -= 1
        }
      }, 1000)
    }
  },
  watch: {
    second: {
      handler (newVal) {
        this.num(newVal)
      }
    },
    minute: {
      handler (newVal) {
        this.num(newVal)
      }
    },
    hour: {
      handler (newVal) {
        this.num(newVal)
      }
    }
  },
  computed: {
    second: function () {
      return this.num(this.seconds)
    },
    minute: function () {
      return this.num(this.minutes)
    },
    hour: function () {
      return this.num(this.hours)
    }
  },
  mounted () {
    this.cutTimeDown()
  }
}
</script>

<style lang="stylus" scoped>
.container
  position: relative
  padding: 0 1.46rem 0 1.8rem
  margin-top: .2rem
  background: #f5f5f5
.box
  height: 4.5rem
  .header
    color: #333
    padding: .2rem 0
.product-area
  height: 3.4rem
  text-align: center
  background: #fff
  .con-tit
    padding-top: .5rem
    color: red
  .img
    padding-top: .2rem
  .desc
    padding-top: .2rem
    font-size: .16rem
    color: #b0b0b0
  .time-wrapper
    padding: .2rem .2rem 0 .65rem
    .ii
      font-size: .46rem
      float: left
    .time-box
      margin: .05rem
      width: .46rem
      height: .46rem
      background: #605751
      color: #fff
      font-size: .24rem
      line-height: .46rem
      float: left
.thumb
  padding: .2rem
  .img
    width: 1.65rem
    height: 1.65rem
.title
  margin: 0 20px 3px
  font-size: 14px
  font-weight: 400
  text-overflow: ellipsis
  color: #212121
  overflow: hidden
  white-space: nowrap
.desc
  height: .18rem;
  margin: 0 .2rem .12rem;
  font-size: .12rem;
  text-overflow: ellipsis;
  color: #b0b0b0;
  overflow: hidden;
  white-space: nowrap;
.price
  font-size: .16rem
  margin: 0;
  color: #ff6709
  del
    color: #b0b0b0
    text-decoration: line-through
</style>
