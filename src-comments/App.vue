<!--根组件-->
<template> <!--模板，写html代码-->
    <div> <!--模板必须要有一个根标签，比如div-->
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <Add :addComment="addComment"/>
        <!--组件之间的通讯，属性名(comments)要与数据定义data()的属性(comments)相同-->
        <List :comments="comments" :deleteComment="deleteComment"/>

      </div>
    </div>
</template>

<script>
  import Add from './components/Add.vue'
  import List from './components/List.vue'
    export default {
      data() {
        return {
          comments: [ // 数据在哪个组件，更新数据的行为（方法）就应该定义在哪个组件
            {
              name: 'BOB',
              content: 'Vue 还不错'
            },
            {
              name: 'Jack',
              content: 'Vue So Easy'
            },
            {
              name: 'Chen',
              content: '瞎说什么大实话'
            }
          ]
        }
      },

      components:{
        Add,List
      },

      methods: {
        //添加评论
        addComment(comment){
          // unshift()将新项添加到数组起始位置:
          this.comments.unshift(comment)
        },

        //删除指定下标的评论
        deleteComment(index){
          this.comments.splice(index, 1)
        }
      }
    }
</script>

<style scoped>

</style>
