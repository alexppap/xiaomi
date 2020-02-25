<template>
  <div>
    <home-header :list="titleList"></home-header>
    <home-navigation
     :breadcList="breadcList"
     :recommendList="recommendList"
    >
     </home-navigation>
    <home-swiper
    :swiperList="swiperList"
    :shopList="shopList"
    :recommendList="recommendList"
    >
    </home-swiper>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeNavigation from './components/Navigation'
import HomeSwiper from './components/Swiper'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNavigation,
    HomeSwiper
  },
  data () {
    return {
      titleList: [],
      breadcList: [],
      recommendList: [],
      swiperList: [],
      shopList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.titleList = data.titleList
        this.breadcList = data.breadcList
        this.recommendList = data.recommendList
        this.swiperList = data.swiperList
        this.shopList = data.shopList
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
