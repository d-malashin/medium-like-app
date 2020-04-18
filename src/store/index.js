import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      role: "",
    },
    posts: {
    },
  },
  mutations: {
    setRole(state, newRole) {
      state.user.role = newRole;
    },
    setClaps(state, claps) {
      state.posts[claps.id] = claps.claps
    },
    incrementClaps(state, clap) {
      state.posts[clap] += 1
    }
  },
  actions: {
    rightsCheck() {
      if (window.sessionStorage.getItem("role") === "writer") {
        return true;
      }
      if (window.sessionStorage.getItem("role") === "reader") return "reader";
    }
  },
  modules: {},
  getters: {
    clapsDone (state) {
      Object.values(state.posts).forEach(element => {
        return element
      });
    }
  }
});
