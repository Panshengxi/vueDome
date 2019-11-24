import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import Login from '@/pages/Login/Login'
import Home from '@/pages/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        keepAlive:true//需要缓存
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive:true//需要缓存
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive:true//需要缓存
      }
    }

  ]
})

