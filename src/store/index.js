import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginData: [{username1: 'admin', password1: '123'}],
    loginShow: false,
    isLogin: false,
    shopNum: 0
  },
  getters: {
    // 获取登录状态
    isLogin: state => state.isLogin
  },
  mutations: {
    changeloginShow (state) {
      state.loginShow = !state.loginShow
    },
    changeisLogin (state) {
      state.isLogin = !state.isLogin
    },
    changeNum (state, num) {
      state.shopNum = num
    }
  }

})
