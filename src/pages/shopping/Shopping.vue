<template>
  <div>
    <shopping-header></shopping-header>
    <shopping-list></shopping-list>
    <shopping-recommend :list="recommendList"></shopping-recommend>
  </div>
</template>

<script>
import axios from 'axios'
import ShoppingHeader from './components/Header'
import ShoppingList from './components/List'
import ShoppingRecommend from './components/Recommend'
export default {
  name: 'Shopping',
  components: {
    ShoppingHeader,
    ShoppingList,
    ShoppingRecommend
  },
  data () {
    return {
      recommendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/shopping.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.recommendList = data.recommendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
