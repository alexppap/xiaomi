<template>
  <div class="container">
    <div class="goods-list">
      <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      >
      <el-table-column
        type="selection"
        width="165">
      </el-table-column>
      <el-table-column
        label="商品名称"
        width="500">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价"
        width="200">
      </el-table-column>
      <el-table-column
        prop="number"
        label="数量"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价"
        width="小计">
      </el-table-column>
      <el-table-column
        prop="price"
        label="操作"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ShoppingList'
}
</script>

<style lang="stylus" scoped>
  .container
    background: #f5f5f5
    padding: .4rem 1.5rem 0 1.5rem
    height: 8rem
    .goods-list
      background: #fff
</style>
