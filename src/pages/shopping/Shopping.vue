<template>
  <div>
    <shopping-header></shopping-header>
    <shopping-list></shopping-list>
  </div>
</template>

<script>
import ShoppingHeader from './components/Header'
import ShoppingList from './components/List'
export default {
  name: 'Shopping',
  components: {
    ShoppingHeader,
    ShoppingList
  }
}
</script>

<style lang="stylus" scoped>

</style>
