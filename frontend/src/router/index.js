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
]

const router = createRouter({
    history: createWebHistory('/thegift_backoffice'),
    routes,
});


router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const isAuthenticated = authStore.user !== null; // Check if user is authenticated
    const userRole = authStore.user?.role; // Assuming 'role' is a property of the user object
  
    // Define public routes that can be accessed without authentication
    const publicRoutes = ["Login", "Register"];
  
    // If the user is not authenticated and tries to access protected routes
    if (!isAuthenticated && !publicRoutes.includes(to.name)) {
      next({ name: "Login" }); // Redirect to login page
    } else {
      // Role-based access: add conditions for specific routes based on the user role
      if (
        isAuthenticated &&
        to.name === "SomeAdminPage" &&
        userRole !== "admin"
      ) {
        next({ name: "Unauthorized" }); // Redirect to an unauthorized page if the role doesn't match
      } else {
        next(); // Allow navigation to the requested route
      }
    }
  });


export default router;