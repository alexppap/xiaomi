<template>
  <div>
    <home-header></home-header>
    <home-navigation></home-navigation>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeNavigation from './components/Navigation'
import HomeSwiper from './components/Swiper'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNavigation,
    HomeSwiper
  }
}
</script>

<style lang="stylus" scoped>

</style>
