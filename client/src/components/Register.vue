<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleRegister">
            <input
                v-model="username"
                type="text"
                placeholder="Username"
            />
            <br>
            <input
                v-model="password"
                type="password"
                placeholder="Password"
            />
            <br>
            <button type="submit">
                Register
            </button>
        </form>
    </div>
</template>

<script>

import AuthService from "@/service/AuthService";

export default {
    name: "Register",
    data: () => ({
        username: '',
        password: '',
    }),
    methods: {
        async handleRegister() {
            console.log(this.username, this.password)
            const res = await AuthService.register({username: this.username, password: this.password})
            console.log(res)
        }
    }
}
</script>

<style scoped>

</style>