import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import Shopping from '@/pages/shopping/Shopping'
import Miui from '@/pages/miui/Miui'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/miui',
      name: 'miui',
      component: Miui,
      meta: {
        isLogin: false
      }
    }
  ]
})
