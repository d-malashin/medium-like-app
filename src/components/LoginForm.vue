<template>
  <section class="column is-one-third">
    <form action="/" method="get">
      <b-field>
        <b-input placeholder="Email" type="email"></b-input>
      </b-field>

      <b-field>
        <b-input placeholder="Password" type="password" min="6" max="20"></b-input>
      </b-field>

      <b-button tag="input" native-type="submit" class="is-submit" value="Sign in"></b-button>
    </form>
  </section>
</template>


<script>
export default {
  name: "LoginForm"
};
</script>