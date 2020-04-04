<template>
  <div>
  <div class="container border-bottom">
    <div class="img-wrapper">
      <img src="./imgs/logo.png">
    </div>
    <div class="breadc">
      <ul>
        <li
          v-for="(item, index) of breadcList"
          :key="index"
        >
          <a href="#" @mouseover="handleTitleMouseOver(index)">{{item.desc}}</a>
        </li>
        <li><a href="#">服务器</a></li>
        <li><a href="#">社区</a></li>
      </ul>
    </div>
    <div class="search-input">
  <el-input placeholder="请输入内容">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
  </div>
  <div class="hide-area"
  v-show="showData"
  v-for="(page, index) of pages"
  :key="index"
  :ref="'area' + index"
  @mouseout="hideHiddenArea($event,index)"
  >
    <el-row :gutter="5">
      <el-col
        :span="4"
        class="border-right"
        v-for="item of page"
        :key="item.id"
      >
        <div class="phone-area">
          <img class="img" :src="item.imgUrl">
          <div class="product">{{item.title}}</div>
          <div class="price">{{item.price}}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeNavigation',
  props: {
    breadcList: Array,
    recommendList: Array
  },
  data () {
    return {
      showData: false,
      timer: null
    }
  },
  methods: {
    handleTitleMouseOver (index) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        let showarea = this.$refs['area' + index][0]
        for (let i in this.breadcList) {
          this.$refs['area' + i][0].style.display = 'none'
        }
        showarea.style.display = 'block'
      }, 100)
    },
    hideHiddenArea (event, index) {
      if (event.clientY > 450) {
        let showarea = this.$refs['area' + index][0]
        showarea.style.display = 'none'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.recommendList.forEach((item, index) => {
        const page = Math.floor(index / 6)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-bottom
  &:before
    border-color: #ccc
.container
  display: flex
  height: 1.25rem
  line-height: 1.25rem
  text-align: center
  padding: 0 1.46rem 0 1.8rem
  .img-wrapper
    float: left
    padding-right: 1.2rem
  .breadc
    flex: 1
  .search-input
    float: right
li
  display: inline
  font-size: 18px
  padding-right: 20px
  float: left
.hide-area
  z-index: 99
  position: absolute
  padding: 0 1.25rem 0 1.25rem
  height: 3rem
  background: #fff
.phone-area
  margin-top: .6rem
  height: 2.4rem
  text-align: center
.img
  margin-bottom: .3rem
.product
  height: .2rem
  line-height: .2rem
  font-size: .16rem
.price
  padding-top: .2rem
  height: .2rem
  line-height: .2rem
  font-size: .16rem
  color: #ff6700
a:link
  color: #000
a:visited
  color: #000
a:hover
  color: #ff6700
</style>
