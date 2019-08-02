/*
入口JS
 */
import Vue from 'vue'// 引入vue实例
import App from './App.vue'// 引入vue实例

// 创建vm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App}, // 映射组件标签，或components: {App:App}
  // 组件是什么？组件是一个局部功能界面，这个界面相关的所有资源都是组件的一个组成部分
  template: '<App/>' // 指定需要渲染到页面的模板
})
