import Homepage from './components/Homepage.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import Assistent from './components/Assistent.vue'

const routes = [
    {
        name: 'Homepage',
        component: Homepage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name:'Assistent',
        component: Assistent,
        path: '/assistent'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router