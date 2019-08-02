<!--根组件-->
<template> <!--模板，写html代码-->
    <div> <!--模板必须要有一个根标签，比如div-->
      <div v-if="!repoUrl">loading......</div>
      <div v-else>
        most star repo is <a :href="repoUrl">{{repoName}}</a>
      </div>
    </div>
</template>

<script>
  //axios在哪用在哪引入
  import axios from 'axios'
    export default {
      data() {
        return {
          repoUrl: '',
          repoName: ''
        }
      },

      mounted() {
        // 发送ajax请求获取数据
        const url = 'https://api.github.com/search/repositories?q=vu&sort=stars'

        // 1.vue-resource使用
        /*this.$http.get(url).then(
          response => {
          // 成功了s
          const result = response.data
          // 得到最受欢迎的repo
          const mostRepo = result.items[0]
          this.repoUrl = mostRepo.html_url
          this.repoName = mostRepo.name
        },
        response => {
          alert("请求失败")
        })*/

         // 2.axios使用
         axios.get(url).then(
           response => {
           // 成功了s
           const result = response.data
           // 得到最受欢迎的repo
           const mostRepo = result.items[0]
           this.repoUrl = mostRepo.html_url
           this.repoName = mostRepo.name
         }).catch(error =>{
           // 失败了
           alert("请求失败")
         })
      }
    }
</script>

<style scoped>

</style>
