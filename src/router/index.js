import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/Login',
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/Login',
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('../components/LoginFormComponent.vue'),
    },
    {       
        path: '/HomePage',
        name: 'HomePage',
        component: () => import('../components/HomePage.vue'),
    }
]

const router = createRouter({
    history: createWebHistory('/thegift'),
    routes,
});

export default router;