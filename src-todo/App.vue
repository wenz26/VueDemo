<!--根组件-->
<template> <!--模板，写html代码-->
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<TodoHeader :addTodo="addTodo"/>-->
      <TodoHeader @addTodo="addTodo"/>
      <!--给TodoHeader标签对象绑定addTodo事件监听,用于父子组件之间-->
      <!--<TodoHeader ref="header"/>-->

      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <!--<TodoFooter :todos="todos" :selectAll="selectAll"
        :deleteCompleteTodos="deleteCompleteTodos"/>-->

      <!--slot插槽方式显示标签-->
      <TodoFooter>
        <input type="checkbox" v-model="checkAll" slot="checkAll"/>
        <span slot="size">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button class="btn btn-danger" v-show="completeSize" slot="delete"
                @click="deleteAllCompleted">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>
<!--
绑定事件监听 ---订阅消息
触发时间 ---发布消息
-->

<script>
  import PubSub from 'pubsub-js'
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import storageUtils from './utils/storageUtils'
    export default {
      components: {
        TodoHeader, TodoList, TodoFooter
      },

      data() {
        return {
          // 从localStorage读取todos
          /*todos: [ //complete:完成
            {title: '吃饭', complete: false},
            {title: '睡觉', complete: true},
            {title: '学习', complete: false}
          ]*/

          // 读取localStorage保存的数据
          // 把字符串 转换为 JSON格式字符串(json格式能转化成数组)
           //todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')

          // 调用工具类
          todos: storageUtils.readTodos()
        }
      },

      computed: {
        completeSize (){
          /*reduce 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，
          接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。

          arr.reduce(callback,[initialValue])
          callback （执行数组中每个值的函数，包含四个参数）
              1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
              2、currentValue （数组中当前被处理的元素）
              3、index （当前元素在数组中的索引）
              4、array （调用 reduce 的数组）
          initialValue （作为第一次调用 callback 的第一个参数。）

          PS：
          var arr = [1, 2, 3, 4];
          var sum = arr.reduce(function(prev, cur, index, arr) {
            console.log(prev, cur, index);
            return prev + cur;
          })
          console.log(arr, sum);

          打印结果：
          1 2 1
          3 3 2
          6 4 3
          [1, 2, 3, 4] 10

          PS：
          var  arr = [1, 2, 3, 4];
          var sum = arr.reduce((x,y)=>x+y)
          var mul = arr.reduce((x,y)=>x*y)
          console.log( sum ); //求和，10
          console.log( mul ); //求乘积，24
          */
          return this.todos.reduce((preTodo, todo) => preTodo + (todo.complete?1:0), 0)
        },

        checkAll: {
          get() {// 决定是否勾选
            return this.completeSize === this.todos.length && this.completeSize>0
          },

          set(value) {// 点击了全选checkbox  value是当前checkbox的选中状态(true/false)
            this.selectAll(value)
          }
        }
      },

      methods: {
        addTodo(todo){
          this.todos.unshift(todo)
        },

        deleteTodo(index){
          this.todos.splice(index, 1)
        },

        // 删除所有已完成的
        deleteCompleteTodos(){
          // 通过过滤和箭头函数留下todo.complete为false的
          // 箭头函数后面是返回的值
          this.todos = this.todos.filter(todo => !todo.complete)
        },

        // 全选/全不选
        selectAll(isSelectAll){
          this.todos.forEach(todo =>{
            todo.complete = isSelectAll
          })
        },

        deleteAllCompleted() {
          if (window.confirm("确定清除已完成的吗?")){
            this.deleteCompleteTodos()
          }
        }
      },

      mounted() {// 执行异步代码
        // 给<TodoHeader/>绑定addTodo事件监听
        //this.$refs.header.$on('addTodo', this.addTodo)

        //订阅消息
        /*PubSub.subscribe('deleteTodo', function (msg, index) => {
          this.deleteTodo(index)
        })*/
      },

      watch: {
        todos: {
          deep: true, // 深度监视

          // handler的值应该是一个函数, 且函数应该要有一个形参(接收todos最新的值)
         /* handler: function (value) { //这里其实有两个参数newvalue和oldvalue
            // 将数据(todo的json值)保存到localStorage
            // JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
            window.localStorage.setItem('todos_key', JSON.stringify(value))
          }*/

          // 通过工具类
          handler: function (value) {
            storageUtils.saveTodos(value)
          }
          //简化：
          //handler: storageUtils.saveTodos
          /*
          handler: storageUtils.saveTodos相当于把saveTodos放过来，其实就是：
          handler: function(todos) {
              localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
           }
           */
        }
      }
    }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
