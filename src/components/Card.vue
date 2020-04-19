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
      <span v-if="rightsCheck() === 'reader'" class="card-footer-item">{{clapsCounter}}</span>
      <b-button
        v-if="rightsCheck() === 'reader'"
        tag="button"
        id="3"
        v-on:click.prevent="incrementClaps"
        class="card-footer-item is-success"
        outlined
      >
        <i id="1" class="fas fa-sign-language"></i>
      </b-button>
      <a v-if="rightsCheck() === true" href="#" class="card-footer-item">Edit</a>
      <a v-if="rightsCheck() === true" href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>


<script>
import Auth from "@/services/AutorizationService";

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
    rightsCheck: Auth.checkRights,
    incrementClaps(event) {
      this.$store.commit("incrementClaps", 1);
    }
  },
  computed: {
    clapsCounter() {
      console.log(this.$store.getters.clapsDone);
      return this.$store.getters.clapsDone;
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