<template>
  <div class="container">
    <div class="left-area">
      <div
        class="option"
        v-for="item of shopList"
        :key="item.id"
        @click="handleAreaClick"
      >
        <div class="desc">
          {{item.desc}}
        </div>
        <div class="iconfont right-arrow">
          &#xe63f;
        </div>
      </div>
    </div>
    <div class="right-area">
      <swiper :options="swiperOption">
    <swiper-slide
      v-for="item of swiperList"
      :key="item.id"
    >
      <img
       class="img"
        :src="item.imgUrl"
      >
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
    </div>
    <div class="hide-area" v-show="showData">
      <div
        class="clearfix"
        v-for="item of recommendList2"
        :key="item.id"
      >
        <div class="img-wrapper">
          <img class="img" :src="item.imgUrl">
        </div>
        <div class="text-content">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array,
    shopList: Array,
    recommendList2: Array
  },
  data () {
    return {
      showData: false,
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
  },
  methods: {
    handleAreaClick () {
      this.showData = !this.showData
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position: relative
  height: 4.09rem
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
      cursor:pointer
      .desc
        font-size: .18rem
        float: left
      .right-arrow
        font-size: .18rem
        float: right
  .right-area
    width: 80%
    padding-bottom: 30.5%
    height: 0
    overflow: hidden
    float:right
    .img
      width: 100%
  .hide-area
    display: flex
    flex-direction: column
    flex-wrap: wrap
    align-content: flex-start
    width: 10.9rem
    height: 4.09rem
    position:absolute
    left: 4.52rem
    z-index: 2
    background: #fff
    .clearfix
      display: flex
      width: 2.425rem
      height: .35rem
      padding: .15rem
      .img-wrapper
        width: .5rem
        height: .5rem
        overflow: hidden
        .img
          width: 100%
      .text-content
        padding: .085rem 0
        font-size: .18rem
</style>
