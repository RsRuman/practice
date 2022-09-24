
import { createRouter, createWebHistory } from "vue-router";
const Home = () => import('../Pages/Home')
const About = () => import("../Pages/About");
const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },

    {
        path: '/about',
        component: About,
        name: 'about'
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes: routes
})

export default router;
