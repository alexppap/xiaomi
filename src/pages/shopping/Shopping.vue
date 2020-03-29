<template>
  <div>
    <shopping-header></shopping-header>
    <shopping-list
      :list="shopList"
    >
    </shopping-list>
    <shopping-recommend
      :list="recommendList"
      @change="changeShopList"
      @add-to-cart="addToCart"
    >
    </shopping-recommend>
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
      recommendList: [],
      shopList: []
    }
  },
  watch: {
    shopList () {
      let num = this.shopList.length
      this.$store.commit('changeNum', num)
    }
  },
  methods: {
    changeShopList (item) {
      this.shopList.push(item)
    },
    _drop (target) {

    },
    addToCart (target) {
      this._drop()
    },
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
