import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import login from '@/views/login.vue'
// 挂载
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      name: '',
      path: '/',
      component: login
    },
    {
      name: 'login',
      path: '/login',
      component: login
    }
  ]
})
export default router
