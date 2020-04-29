import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import Shopping from '@/pages/shopping/Shopping'
<<<<<<< HEAD
import Rigister from '@/pages/rigister/Rigister'
=======
import Miui from '@/pages/miui/Miui'
>>>>>>> miui-start
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
<<<<<<< HEAD
      path: '/rigister',
      name: 'rigister',
      component: Rigister,
=======
      path: '/miui',
      name: 'miui',
      component: Miui,
>>>>>>> miui-start
      meta: {
        isLogin: false
      }
    }
  ]
})
