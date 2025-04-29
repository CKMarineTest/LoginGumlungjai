import { useAuthStore } from "@/stores/authStore";
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
        meta: { requiresAuth: false }
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () => import('../views/DashBoard.vue'),
        meta: { requiresAuth: true }
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
        meta: { requiresAuth: true }
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
    {
        path: '/sendscore',
        name: 'sendscore',
        component: () => import('../views/SendScoreView.vue'),
    },
    {
        path: '/documentdata/:idcard',
        name: 'documentdatabyid',
        component: () => import('../views/DocumentdataView.vue'),
    },
    {
        path: '/pdf/:idcard',
        name: 'pdfbyid',
        component: () => import('../components/PDFComponent.vue'),
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../components/UserTableComponent.vue'),
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../components/AdminTableComponent.vue')
    },
    {
        path: '/score',
        name: 'score',
        component: () => import('../components/ScoreTableComponent.vue')
    },
    {
        path: '/modal',
        name: 'modal',
        component: () => import('../components/Modal/RegisterModal.vue')
    }
]

const router = createRouter({
    history: createWebHistory('/thegift_backoffice'),
    routes,
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const user = authStore.user;
  
    if (to.meta.requiresAuth && !user) {
      authStore.returnUrl = to.fullPath; 
      return next({ name: "Login" });
    }
  
    next();
  });
  
export default router;