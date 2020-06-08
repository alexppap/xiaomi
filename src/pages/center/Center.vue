<template>
  <div>
    <center-page :list="navList"></center-page>
  </div>
</template>

<script>
import axios from 'axios'
import CenterPage from './components/Page'
export default {
  name: 'Center',
  components: {
    CenterPage
  },
  data () {
    return {
      navList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/center.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.navList = data.navList
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
