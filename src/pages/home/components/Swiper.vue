<template>
  <div class="container">
    <div class="left-area">
      <div class="option">
        <div class="desc">
          手机 电话卡
        </div>
        <div class="iconfont right-arrow">
          &#xe63f;
        </div>
      </div>
      <div class="option">
        <div class="desc">
          手机 电话卡
        </div>
        <div class="iconfont right-arrow">
          &#xe63f;
        </div>
      </div>
      <div class="option">
        <div class="desc">
          手机 电话卡
        </div>
        <div class="iconfont right-arrow">
          &#xe63f;
        </div>
      </div>
      <div class="option">
        <div class="desc">
          手机 电话卡
        </div>
        <div class="iconfont right-arrow">
          &#xe63f;
        </div>
      </div>
      <div class="option">
        <div class="desc">
          手机 电话卡
        </div>
        <div class="iconfont right-arrow">
          &#xe63f;
        </div>
      </div>
      <div class="option">
        <div class="desc">
          手机 电话卡
        </div>
        <div class="iconfont right-arrow">
          &#xe63f;
        </div>
      </div>
      <div class="option">
        <div class="desc">
          手机 电话卡
        </div>
        <div class="iconfont right-arrow">
          &#xe63f;
        </div>
      </div>
    </div>
    <div class="right-area">
      <swiper :options="swiperOption">
    <swiper-slide><img class="img" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/755aca9487082e7698e16f17cfb70839.jpg?thumb=1&w=1533&h=575&f=webp&q=90"></swiper-slide>
    <swiper-slide><img class="img" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f159501b4353abc582d5d817ecd93714.jpg?thumb=1&w=1533&h=575&f=webp&q=90"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        effect: 'fade'

      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  z-index: 1
  position: relative
  height: 0
  padding: 0 1.46rem 0 1.8rem
  .left-area
    width: 20%
    height: 3.74rem
    background: #909399
    padding-top: .35rem
    float:left
    .option
      padding: .08rem .3rem
      height: .35rem
      line-height: .35rem
      color: #fff
      .desc
        font-size: .18rem
        float: left
      .right-arrow
        font-size: .18rem
        float: right
  .right-area
    width: 80%
    padding-bottom: 37.5%
    height: 0
    overflow: hidden
    float:right
    .img
      width: 100%
</style>
