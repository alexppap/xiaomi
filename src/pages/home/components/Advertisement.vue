<template>
  <div class="container">
    <el-container>
      <el-header>手机</el-header>
      <el-container>
      <el-aside width="234px">
        <img class="img" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=293&h=768&f=webp&q=90">
      </el-aside>
      <el-main>
        <el-row :gutter="20">
        <el-col
          :span="6"
          v-for="item of adverseList"
          :key="item.id"
        >
          <div class="product-area">
            <div class="thumb">
              <img class="img" :src="item.imgUrl">
            </div>
            <h3 class="title">{{item.title}}</h3>
            <p class="desc">{{item.desc}}</p>
            <p class="price">
              <span>{{item.price}}</span>元起
              <del>{{item.delprice}}</del>
            </p>
          </div>
        </el-col>
      </el-row>
      </el-main>
    </el-container>
</el-container>
  </div>
</template>
<script>
export default {
  name: 'HomeAdvertisement',
  props: {
    adverseList: Array
  }
}
</script>

<style lang="stylus" scoped>
.container
  padding: 0 1.46rem 0 1.8rem
  margin-top: .2rem
  height: 8rem
  background: #f5f5f5
.el-aside
  line-height: 6.64rem
  .img
    width: 100%
.el-main
  height: 6.64rem
  .product-area
    margin-top: .1rem
    height: 3.0rem
    text-align: center
    background: #fff
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
      margin: .1rem .2rem .12rem;
      font-size: .14rem;
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
