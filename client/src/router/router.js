import Vue from 'vue'
import Router from 'vue-router'
import Register from "@/components/Register";

Vue.use(Router)

const routes = [
    {
        path: '/register',
        component: Register,
        name: 'register'
    }
]

export default new Router({
    routes,
    mode: "history"
})