<template>
  <transition appear>
    <section class="section-padding-medium">
      <div class="columns is-mobile is-centered">
        <div class="column is-half">
          <b-field label="Heading" :label-position="labelPosition">
            <b-input placeholder="Write a heading" v-model="heading"></b-input>
          </b-field>

          <b-field label="Text" :label-position="labelPosition">
            <b-input maxlength="4000" type="textarea" rows="20" v-model="text"></b-input>
          </b-field>

          <hr />

          <b-button class="button is-primary" @click.prevent="publishPost">Publish</b-button>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      heading: "",
      text: "",
      labelPosition: "on-border"
    };
  },
  methods: {
    publishPost() {
      const title = this.heading,
        description = this.text,
        id = this.$route.query.key;
      this.$store.commit("publishPost", { title, description, id });
      this.$router.push("/");
    }
  },
  mounted() {
    if (this.$route.query.key) {
      let state = this.$store.getters.getPostsState;
      let id = this.$route.query.key;
      state.forEach(element => {
        if (element.id === parseInt(id)) {
          this.heading = element.title;
          this.text = element.description;
        }
      });
    }
  }
};
</script>


<style scoped>
section {
  margin-top: 2rem;
}
</style>