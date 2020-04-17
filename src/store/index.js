import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      role: ''
    }
  },
  mutations: {
    setRole (state, newRole) {
      state.user.role = newRole
    }
  },
  actions: {
  },
  modules: {
  }
})
