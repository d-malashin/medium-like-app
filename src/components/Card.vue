<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div class="card-header">
          <p class="card-header-title">{{ data.title }}</p>
        </div>
        <div class>{{ data.description }}</div>
        <div class>
          <time
            datetime="this.data.createdAt"
          >Created at: {{new Date(data.createdAt).toUTCString()}}</time>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <span class="card-footer-item">{{clapsCounter}}</span>
      <b-button
        v-if="rightsCheck === 'reader'"
        tag="button"
        @click.prevent="incrementClaps"
        class="card-footer-item is-success"
      >
        <i class="fas fa-sign-language"></i>
      </b-button>
      <b-button
        v-if="rightsCheck === 'writer'"
        tag="router-link"
        :to="{ path: `/post-editor?key=${this.data.id}` }"
        class="card-footer-item"
        is-clipped
      >Edit {{id}}</b-button>
      <b-button
        v-if="rightsCheck === 'writer'"
        @click.prevent="deletePost"
        class="card-footer-item"
      >Delete</b-button>
    </footer>
  </div>
</template>


<script>
export default {
  props: {
    data: {
      title: String,
      required: true
    },
    id: Number
  },
  created() {},
  methods: {
    incrementClaps() {
      this.$store.commit("incrementClaps", this.data.id);
    },
    deletePost() {
      this.$store.commit("deletePost", this.data.id);
    }
  },
  computed: {
    clapsCounter(element) {
      return this.$store.getters.getClaps(element.data.id).claps;
    },
    rightsCheck() {
      return this.$store.getters.getRights;
    }
  }
};
</script>  

<style scoped>
.button {
  font-size: 1.3rem;
  height: 3em;
}
</style>