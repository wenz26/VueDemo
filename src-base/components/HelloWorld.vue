<template>
  <div>
    <h2 class="title">{{msg}}</h2>
  </div>
</template>

<script>
    //配置对象（与Vue一致）
    export default { //向外暴露的对象的内容，相对固定的写法
      data() {
        return {
          msg: '我的第一个Vue组件！！！'
        }
      }
    }
</script>

<style scoped>
  .title {
    color: red;
    background: yellow;
  }
</style>
<!--当一个style标签拥有scoped属性时，它的CSS样式就只能作用于当前的组件，
也就是说，该样式只能适用于当前组件元素。通过该属性，可以使得组件之间的样式不互相污染。
如果一个项目中的所有style标签全部加上了scoped，相当于实现了样式的模块化。-->
