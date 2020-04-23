<template>
  <div>
   <div class="home1" ref="home1"></div>
   <div class="home2"></div>
   <div class="home3"></div>
  </div>
</template>

<script>
export default {
  name: 'MiuiHome'
}
</script>

<style lang="stylus" scoped>
.home1
  z-index: 2
  position: relative
  width: 100%
  height: 836px
  background: red
.home2
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 1
  width: 100%
  height: 836px
  background: blue
.home3
  position relative
  z-index: 1
  width: 100%
  height: 836px
  background: yellow
</style>
