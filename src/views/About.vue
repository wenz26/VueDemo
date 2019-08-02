<!--根组件-->
<template> <!--模板，写html代码-->
  <div> <!--模板必须要有一个根标签，比如div-->
    <h2>About</h2>
    <p>{{msg}}</p>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
    export default {
      props: {
        msg: String
      }
    }
</script>

<style scoped>

</style>
