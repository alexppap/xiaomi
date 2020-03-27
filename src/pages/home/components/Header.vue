<template>
  <div class="container">
  <div class="left-nav">
    <ul>
      <li class="title-name"
      v-for="item of list"
      :key="item.id"
      >
      <a href="#" class="headera">
      {{item.desc}}
      </a>
      </li>
    </ul>
  </div>
  <div class="right-nav">
    <div v-show="!loginShow" class="loginarea"><li class="title-name"><router-link class="headera" to="/login">登录 |</router-link></li>
    <li class="title-name"><router-link class="headera" to="/login">注册 |</router-link></li></div>
    <li class="title-name" v-show="loginShow">
      {{this.$store.state.loginData[0].username1}}
    </li>
    <li class="title-name"><a href="#" class="headera">消息通知</a></li>
    <li class="title-name">
    <router-link
      tag="div"
      class="shopping-car"
      :class= "{active: isActive}"
      to="/shopping"
      ref="shopping"
    >
     <span
      class="iconfont shopping-car"
      :class= "{active: isActive}"
      >&#xe62d;
      </span>
      购物车({{ shopNum}})
    </router-link>
    </li>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    list: Array
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    loginShow () {
      return this.$store.state.loginShow
    },
    shopNum () {
      return this.$store.state.shopNum
    }
  },
  activated () {
    if (this.shopNum > 0) {
      this.isActive = true
    } else {
      this.isActive = false
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
    right: 1.46rem
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
    .active
      background: #ff6700
      color: #fff
.shopping-car
  padding-right: .1rem
  font-size: .16rem
  cursor: pointer
  .active
    background: #ff6700
    color: #fff
.headera:link
   color: #b0b0b0
.headera:visited
  color: #b0b0b0
.headera:hover
  color: #fff
.loginarea
  display: inline

</style>
