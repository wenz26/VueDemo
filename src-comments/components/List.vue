<!--根组件-->
<template> <!--模板，写html代码-->
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
    <Item v-for="(comment, index) in comments" :key="index" :index="index"
          :comment="comment" :deleteComment="deleteComment"></Item>

    </ul>
  </div>
</template>

<script>
    import Item from './Item.vue'
    export default {
      /*一个组件想要接收父组件传送过去的数据，就必须要声明，
        声明接收的属性，如下用props声明接收的属性comments
        这个属性就会成为组件对象的属性*/
      props: ['comments', 'deleteComment'], // 只指定了属性名

      components: {
        Item
      }

    }
</script>

<style>
  .reply {
    margin-top: 0px;
  }
</style>
