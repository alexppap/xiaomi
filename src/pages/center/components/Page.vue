<template>
  <div class="container">
    <div class="left-area">
      <div class="img-wrapper">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90" alt="head" class="img">
      </div>
      <div class="h5">
        <span>text</span>
      </div>
      <div
        class="nav border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <span>{{item.desc}}</span>
      </div>
    </div>
    <div class="right-area">
      <div class="header border-bottom">
        <span>账户资料</span>
      </div>
      <div class="avatar-box">
        <div class="img-wrapper2">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90" alt="head2" class="img">
        </div>
        <div class="desc">
          <div>修改头像</div>
          <div class="checkout">上传</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CenterPage',
  props: {
    list: Array
  },
  data () {
    return {
      message: '22'
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position: relative
  height: 8.09rem
  padding: .4rem 1.46rem 0 1.8rem
  overflow: hidden
  background: #f5f5f5;
  .left-area
    width: 20%
    border-radius: .05rem
    background: #fff
    padding-top: .35rem
    float: left
    .img-wrapper
      width: 1.8rem
      height: 1.8rem
      margin: 0 auto
      overflow: hidden
      .img
        width: 100%
    .h5
      height: .48rem
      font-size: .28rem
      line-height: .48rem
      font-weight: 700
      text-align: center
    .nav
      height: .48rem
      font-size: .18rem
      color: #ff6700
      line-height: .48rem
      text-align: center
  .right-area
    width: 80%
    height: 8rem
    overflow: hidden
    float: right
    .header
      height: .6rem
      padding-left: .4rem
      line-height: .6rem
      font-size: .28rem
      font-weight: 400
      color: #626262
      box-shadow: 0 1px 7px rgba(0,0,0,.06)
      background: linear-gradient(#fbfbfb,#ececec)
    .avatar-box
      padding: 0 .3rem .3rem
      overflow: hidden
      .img-wrapper2
        width: 1.2rem
        height: 1.2rem
        overflow: hidden
        float: left
        .img
          width: 100%
      .desc
        font-size: .18rem
        padding-left: .2rem
        padding-top: .4rem
        float: left
        text-align: center
        .checkout
          width: 1rem
          height: .3rem
          font-size: .16rem
          line-height: .3rem
          background: #ff6700
          color: #fff
          margin-top: .2rem
          float left
</style>
