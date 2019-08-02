<!--根组件-->
<template> <!--模板，写html代码-->
  <div> <!--模板必须要有一个根标签，比如div-->
    <ul>
      <li v-for="(message) in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">
          {{message.title}}</router-link>

        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>

      </li>
    </ul>

    <button @click="$router.back()">回退</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          messages: []
        }
      },

      mounted() { // 异步显示
        // 模拟ajax请求从后台获取数据
        // setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。
        setTimeout(() =>{
          const messages = [
            {id: 1, title: 'Message001'},
            {id: 3, title: 'Message003'},
            {id: 5, title: 'Message005'},
            {id: 7, title: 'Message007'}
          ]
          this.messages = messages
        }, 1500)
      },

      methods: {
        pushShow(id){
          this.$router.push(`/home/message/detail/${id}`)
        },

        replaceShow(id){
          this.$router.replace(`/home/message/detail/${id}`)
        }
      }
    }
</script>

<style scoped>

</style>
