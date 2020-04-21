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
    writeRole(state, newRole) {
      state.user.role = newRole;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setClaps(state, claps) {
      state.posts[claps.id] = claps.claps;
    },
    incrementClaps(state, id) {
      state.posts[id - 1].claps += 1;
    },
    deletePost(state, id) {
      console.log(state.posts)
      confirm('Are you shure?') ? state.posts = state.posts.filter(post => post.id !== id) : null
    },
  },

  actions: {
    getPosts(context) {
      API.getPosts().then((posts) => {
        return context.commit("setPosts", posts)
      });
    },
    setRole(context, newRole) {
      context.commit('writeRole', newRole)
    }
  },

  modules: {},
  
  getters: {
    getPostsState(state) {
      return state.posts;
    },
    getRights(state) {
      return state.user.role
    },
    getClaps: state => id => {
      return state.posts.find(post => post.id === id)
    },
  },
});
