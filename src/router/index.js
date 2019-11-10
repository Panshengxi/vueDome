import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'

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

