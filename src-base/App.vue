<!--根组件-->
<template> <!--模板，写html代码-->
  <div> <!--模板必须要有一个根标签，比如div-->
    <img src="./assets/logo.png" alt="logo" class="logo">
    <!--alt 属性是一个必需的属性，它规定在图像无法显示时的替代文本。-->
    <HelloWorld />
  </div>
</template>

<script>
  // 1、引入组件
  import HelloWorld from './components/HelloWorld'

  export default{
    //2、映射组件标签
    components: {
      HelloWorld
    }
  }
</script>

<style scoped>
  .logo {
    width: 100px;
    height: 100px;
  }
</style>
