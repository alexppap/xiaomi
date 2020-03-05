import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginData: [{username1: 'admin', password1: '123'}],
    loginShow: false
  },
  mutations: {
    changeloginShow (state) {
      state.loginShow = !state.loginShow
    }
  }

})
