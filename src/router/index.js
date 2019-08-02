/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'
import MessageDetail from  '../views/MessageDetail.vue'

/*
内部定义并注册了2个组件标签(router-link/router-view),
给组件对象添加了2个属性:
  1. $router: 路由器
  2. $route: 当前路由
 */
Vue.use(VueRouter)// 声明使用vue-router插件

export default new VueRouter({
  // 注册应用中所有的路由
  routes: [// path最左侧的'/'代表根路径
    {
      path: '/about',
      component: About// 对应某个路由组件
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/news',
          component: News// 对应某个路由组件
        },
        {
          path: 'message',// 简化写法
          component: Message,// 对应某个路由组件
          children: [
            {
              path: '/home/message/detail/:id',// :id 是占位语法
              component: MessageDetail// 对应某个路由组件
            },
          ]
        },
        {
          path: '',//当前路径下
          redirect: '/home/news'
        }
      ]
    },
    {// 在根目的，默认自动重定向请求'/about'
      path: '/',
      redirect: '/about'
    }
  ]
})



