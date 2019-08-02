<!--根组件-->
<template> <!--模板，写html代码-->
  <div> <!--模板必须要有一个根标签，比如div-->
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
        <li><router-link to="/home/news">News</router-link></li>
        <li><router-link to="/home/message">Message</router-link></li>
      </ul>

      <hr>
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style scoped>

</style>
