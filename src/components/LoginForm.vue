<template>
  <section class="column is-2">
    <form @submit.prevent="login">
      <b-field>
        <b-input placeholder="Email" type="email" v-model.lazy="email" required></b-input>
      </b-field>

      <b-field>
        <b-input
          placeholder="Password"
          type="password"
          minlength="6"
          maxlength="20"
          required
          v-model.lazy="password"
        ></b-input>
      </b-field>
      <div class="control">
        <b-button tag="input" native-type="submit" class="is-primary" value="Sign in"></b-button>
      </div>
    </form>
  </section>
</template>


<script>
import AuthService from '@/services/AuthorizationService'

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      AuthService.auth(this.email, this.password)
      .then(() => this.$router.push('/'))
    }
  }
};
</script>