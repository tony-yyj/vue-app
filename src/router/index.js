import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login'
import HelloTest from '@/components/HelloTest'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/1',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'HelloTest',
      component: HelloTest
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
