<template>
  <div class="container">
    <div class="left-area">
      <div
        class="option"
        v-for="item of shopList"
        :key="item.id"
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
      },
      swiperList: [{
        'id': '0001',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/755aca9487082e7698e16f17cfb70839.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
      }, {
        'id': '0002',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f159501b4353abc582d5d817ecd93714.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
      }, {
        'id': '0003',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4aa0cbfad7de34618c4bebdbdeee4e1.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
      }, {
        'id': '0004',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f424f55554befb780ee50a761b2a768.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
      }, {
        'id': '0005',
        'imgUrl': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bd4174b8c5aad67a64864a5716ad152.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
      }],
      shopList: [{
        'id': '0001',
        'desc': '手机 电话卡'
      }, {
        'id': '0002',
        'desc': '电视 盒子'
      }, {
        'id': '0003',
        'desc': '笔记本 显示器'
      }, {
        'id': '0004',
        'desc': '家电插线板'
      }, {
        'id': '0005',
        'desc': '出行 穿戴'
      }, {
        'id': '0006',
        'desc': '智能 路由器'
      }, {
        'id': '0007',
        'desc': '电源 配件'
      }]
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
