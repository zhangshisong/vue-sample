import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    userinfo: {
      userId: null,
      businessKey: null,
      username: null,
      name: null
    }
  },
  mutations: {
    token (state, data) {
      // console.log('xxxxx', data)
      state.token = data
    },
    logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  },
  actions: {
  },
  modules: {
  }
})
