<!--根组件-->
<template> <!--模板，写html代码-->
  <!--.native表示用的是原生的点击监听-->
    <mt-button type="primary" @click.native="handleClick"
               style="width: 100%">Test</mt-button>
</template>

<script>
  import { Toast } from 'mint-ui'
    export default {
      methods: {
        handleClick(){
          Toast('提示信息')
        }
      }
    }
</script>

<style scoped>

</style>
