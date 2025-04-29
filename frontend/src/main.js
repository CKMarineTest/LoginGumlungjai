import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Toast from 'vue-toastification';

import "vue-toastification/dist/index.css";

import { createPinia } from 'pinia';

import './index.css';
import './assets/main.css';
import './assets/font.css';

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(Toast);
app.mount('#app');