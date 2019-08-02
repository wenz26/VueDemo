<!--根组件-->
<template> <!--模板，写html代码-->
  <!--$route.params,可以说于route.params,可以说于route是一个中间容器,用来容纳参数,
    是键值对的方式,这样在这个页面执行动作传递参数到route.params,在另外一个页面就能从
    route.params,在另外一个页面就能从route.params里拿参数,就这么回事-->
  <div>
    <h4>ID: {{$route.params.id}}</h4>
    <ul>
      <li>id: {{detail.id}}</li>
      <li>title: {{detail.title}}</li>
      <li>content: {{detail.content}}</li>
    </ul>

  </div>
</template>

<script>
  const messageDetails =[
    {id: 1, title: 'Message001', content: 'message content00111....'},
    {id: 3, title: 'Message003', content: 'message content00333....'},
    {id: 5, title: 'Message005', content: 'message content00555....'},
    {id: 7, title: 'Message007', content: 'message content00777....'}
  ]
    export default {
      data(){
        return {
          detail: {}
        }
      },

      mounted() {// 改变当前路由组件参数数据时, 不会重新创建组件对象, mounted不会重新执行
        const id = this.$route.params.id
        this.detail = messageDetails.find(detail => detail.id === id*1)
      },

      watch: {
        $route: function () {// 改变当前路由组件参数数据时自动调用
          const id = this.$route.params.id
          this.detail = messageDetails.find(detail => detail.id === id*1)
          //id*1是为了防止在$route.params里面取出来的id是字符串
        }
      }
    }
</script>

<style scoped>

</style>
