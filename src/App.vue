<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  created() {
    this.checkUser()
  },
  methods: {
    checkUser() {
      const role = window.sessionStorage.getItem("role");
      if (!role) {
        window.sessionStorage.setItem("role", "user");
      }
      switch (role) {
        case "user": {
          this.$store.commit("setRole", "user");
          break;
        }

        case "reader": {
          this.$store.commit("setRole", "reader");
          break;
        }

        case "writer": {
          this.$store.commit("setRole", "writer");
        }
      }
    }
  },
  components: {
    Navbar
  }
};
</script>