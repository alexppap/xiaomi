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
    :recommendList2="recommendList2"
    >
    </home-swiper>
    <home-cuttime :cutTimeList="cutTimeList"></home-cuttime>
    <home-service></home-service>
    <home-advertisement :adverseList="adverseList"></home-advertisement>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeNavigation from './components/Navigation'
import HomeSwiper from './components/Swiper'
import HomeService from './components/Service'
import HomeCuttime from './components/Cuttime'
import HomeAdvertisement from './components/Advertisement'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNavigation,
    HomeSwiper,
    HomeService,
    HomeCuttime,
    HomeAdvertisement
  },
  data () {
    return {
      titleList: [],
      breadcList: [],
      recommendList: [],
      recommendList2: [],
      swiperList: [],
      shopList: [],
      cutTimeList: [],
      adverseList: []
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
        this.recommendList2 = data.recommendList2
        this.swiperList = data.swiperList
        this.shopList = data.shopList
        this.cutTimeList = data.cutTimeList
        this.adverseList = data.adverseList
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
