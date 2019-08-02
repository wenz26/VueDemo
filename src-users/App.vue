<!--根组件-->
<template> <!--模板，写html代码-->
  <div class="container">
    <Search/>
    <UserMain/>
  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import Main from './components/Main.vue'
    export default {
      components: {
        Search,
        UserMain: Main
      }
    }
</script>

<style scoped>

</style>
