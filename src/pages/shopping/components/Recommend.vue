<template>
  <div class="container">
    <div class="re-title">买过的人还买了</div>
    <div class="re-list">
      <el-row :gutter="20">
        <el-col
          :span="6"
          v-for="item of list"
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
            <div class="iconfont shopcart">&#xe62d;</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingRecommend',
  props: {
    list: Array
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
.shopcart
  font-size: .2rem
  margin-top: .1rem
  cursor: pointer
</style>
