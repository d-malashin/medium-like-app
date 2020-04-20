import Vue from "vue";
import Vuex from "vuex";
import API from "@/services/ApiService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      role: "",
    },
    posts: [],
  },
  mutations: {
    setRole(state, newRole) {
      state.user.role = newRole;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setClaps(state, claps) {
      state.posts[claps.id] = claps.claps;
    },
    incrementClaps(state, clap) {
      state.posts[clap] += 1;
    },
  },
  actions: {
    rightsCheck() {
      if (window.sessionStorage.getItem("role") === "writer") {
        return true;
      }
      if (window.sessionStorage.getItem("role") === "reader") return "reader";
    },
    getPosts(context) {
      API.getPosts().then((posts) => {
        return context.commit("setPosts", posts)
      });
    },
  },
  modules: {},
  getters: {
    postsState(state) {
      return state.posts;
    },
    clapsDone(state) {
      Object.values(state.posts).forEach((element) => {
        return element;
      });
    },
  },
});
