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
        component: () => import('../views/LoginForm.vue'),
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () => import('../views/DashBoard.vue'),
    },
    {
        path: '/registerform',
        name: 'RegisterForm',
        component: () => import('../views/RegisterForm.vue'),
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import('../views/SettingViews.vue'),
    },
    {
        path: '/infoscholarship',
        name: 'infoscholarship',
        component: () => import('../views/InfoScholarShip.vue'),
    },
    {
        path: '/settinguser',
        name: 'settinguser',
        component: () => import('../views/SettingUser.vue'),
    },
    {
        path: '/documentdata',
        name: 'documentdata',
        component: () => import('../views/DocumentdataView.vue'),
    },
    {
        path: '/pdf',
        name: 'pdf',
        component: () => import('../components/PDFComponent.vue'),
    },
]

const router = createRouter({
    history: createWebHistory('/thegift_backoffice'),
    routes,
});

export default router;