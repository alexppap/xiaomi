<template>
  <div>
  <div class="container border-bottom">
    <div class="img-wrapper">
      <img src="./imgs/logo.png">
    </div>
    <div class="breadc">
      <ul>
        <li>32</li>
        <li>424</li>
      </ul>
    </div>
    <div class="search-input">
  <el-input placeholder="请输入内容">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
  </div>
  <div class="hide-area">
    <el-row :gutter="5">
      <el-col :span="4" class="border-right">
        <div class="phone-area">
          <img class="img" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=200&h=138&f=webp&q=90">
          <div class="product">小米10 pro</div>
          <div class="price">4999起</div>
        </div>
      </el-col>
      <el-col :span="4"><div class="phone-area"></div></el-col>
      <el-col :span="4"><div class="phone-area"></div></el-col>
      <el-col :span="4"><div class="phone-area"></div></el-col>
      <el-col :span="4"><div class="phone-area"></div></el-col>
      <el-col :span="4"><div class="phone-area"></div></el-col>

    </el-row>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeNavigation'

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
  padding: 0 3.25rem 0 1.8rem
  .img-wrapper
    float: left
    padding-right: 1.2rem
  .breadc
    flex: 1
  .search-input
    float: right
li
  display: inline
  font-size: 20px
  padding-right: 30px
  float: left
.hide-area
  padding: 0 1.25rem 0 1.25rem
  height: 3rem
.phone-area
  padding-top: .6rem
  height: 3rem
  text-align: center
.img
  margin-bottom: .3rem
.product
  height: .2rem
  line-height: .2rem
  font-size: .2rem
.price
  margin-top: .2rem
  height: .2rem
  line-height: .2rem
  font-size: .16rem
  color: #ff6700
</style>
