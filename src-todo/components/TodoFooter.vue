<!--根组件-->
<template> <!--模板，写html代码-->
  <div class="todo-footer">
    <label>
      <!--<input type="checkbox" v-model="checkAll"/>-->
      <slot name="checkAll"></slot>
    </label>

    <span>
      <!--<span>已完成{{completeSize}} / 全部{{todos.length}}</span>-->
      <slot name="size"></slot>
    </span>

    <!--<button class="btn btn-danger" v-show="completeSize" @click="deleteAllCompleted">
      清除已完成任务</button>-->
    <slot name="delete"></slot>
  </div>
</template>

<script>
    export default {
      /*props: {
        todos: Array,
        deleteCompleteTodos: Function,
        selectAll: Function
      },

      computed: {
        completeSize (){
          /!*reduce 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，
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
          *!/
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
        deleteAllCompleted() {
          if (window.confirm("确定清除已完成的吗?")){
            this.deleteCompleteTodos()
          }
        }
      }*/
    }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
