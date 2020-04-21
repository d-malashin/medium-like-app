<template>
  <div>
    <Navbar />
    <transition appear name="fade" :duration="200" mode="in-out">
    <router-view />
    </transition>
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