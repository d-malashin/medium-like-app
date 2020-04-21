<template>
    <section class="columns is-mobile is-centered">
        <LoginForm />
    </section>
</template>


<script>
import LoginForm from '@/components/LoginForm'

export default {
    name: "Login",
    components: {
        LoginForm
    }
}
</script>