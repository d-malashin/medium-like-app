<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Auth from "@/services/AuthorizationService"

export default {
  created() {
      Auth.checkRights()
  },
  computed: {
  },
  components: {
    Navbar
  }
};
</script>