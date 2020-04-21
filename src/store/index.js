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
      state.posts.sort((post1, post2) => {
        if (post1.createdAt < post2.createdAt) {
          return 1
        } 
        return -1
      });
    },
    setClaps(state, claps) {
      state.posts[claps.id] = claps.claps;
    },
    incrementClaps(state, id) {
      state.posts[id - 1].claps += 1;
    },
    publishPost(state, content) {
      if (content.id) {
        const humanReadablePostId = parseInt(content.id) + 1;
        state.posts.forEach((el) => {
          if (el.id === humanReadablePostId) {
            el.title = content.title;
            el.description = content.description;
          }
        });
      } else {
        state.posts.splice(0,0,{
          id: content.id ? content.id : Math.random() * 10,
          title: content.title,
          description: content.description,
          createdAt: new Date().toUTCString(),
        });
      }
    },
    deletePost(state, id) {
      confirm("Are you shure?")
        ? (state.posts = state.posts.filter((post) => post.id !== id))
        : null;
    },
  },

  actions: {
    getPosts(context) {
      API.getPosts().then((posts) => {
        return context.commit("setPosts", posts);
      });
    },
    setRole(context, newRole) {
      context.commit("writeRole", newRole);
    },
  },

  modules: {},

  getters: {
    getPostsState(state) {
      return state.posts;
    },
    getRights(state) {
      return state.user.role;
    },
    getClaps: (state) => (id) => {
      return state.posts.find((post) => post.id === id);
    },
  },
});
