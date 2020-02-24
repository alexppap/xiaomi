<template>
  <div>
    <home-header :list="titleList"></home-header>
    <home-navigation></home-navigation>
    <home-swiper></home-swiper>
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
      titleList: []
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
