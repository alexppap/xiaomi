<template>
  <div class="container">
  <div class="left-nav">
    <ul>
      <li class="title-name"
      v-for="item of titleList"
      :key="item.id"
      >
      <a href="#" class="headera">
      {{item.desc}}
      </a>
      </li>
    </ul>
  </div>
  <div class="right-nav">
    <li class="title-name"><a href="#" class="headera">登录 |</a></li>
    <li class="title-name"><a href="#" class="headera">注册 |</a></li>
    <li class="title-name"><a href="#" class="headera">消息通知</a></li>
    <li class="title-name">
    <div class="shopping-car"><span></span>购物车</div>
    </li>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      titleList: [{
        id: '0001',
        desc: '小米商城 |'
      }, {
        id: '0002',
        desc: 'MIUI |'
      }, {
        id: '0003',
        desc: 'IoT |'
      }, {
        id: '0004',
        desc: '云服务 |'
      }, {
        id: '0005',
        desc: '金融 |'
      }, {
        id: '0006',
        desc: '有品 |'
      }, {
        id: '0007',
        desc: '小爱开放平台 |'
      }, {
        id: '0008',
        desc: '资质证照 |'
      }, {
        id: '0009',
        desc: '协议规则 |'
      }, {
        id: '0010',
        desc: '企业团购 |'
      }, {
        id: '0011',
        desc: '下载app |'
      }, {
        id: '0012',
        desc: 'slect location'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position: relative
  height: .4rem
  line-height: .4rem
  background: #333
  text-align: center
  vertical-align: center
  .left-nav
    position: absolute
    left: 1.8rem
    font-size: .14rem
    .title-name
      display: inline-block
      padding-right: .05rem
      list-style: none
      color: #b0b0b0
  .right-nav
    position: absolute
    right: 3.25rem
    font-size: .14rem
    .title-name
      display: inline-block
      padding-right: .05rem
      list-style: none
      color: #b0b0b0
    .shopping-car
      line-height: .4rem
      height: .4rem
      width: 1.2rem
      margin-left: .1rem
      background: #424242
.headera:link
   color: #b0b0b0
.headera:visited
  color: #b0b0b0
.headera:hover
  color: #fff
</style>
