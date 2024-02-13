import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/auth/Login.vue';
import ForgetPassword from '@/views/auth/ForgetPassword.vue'
import Homepage from '@/views/home/Homepage.vue'
import resetPassword from '@/views/auth/ResetPassword.vue'
import About from '@/views/home/About.vue'

const routes = [
  { path: '/about', component: About },
  { path: '/', alias: '/login',  component: Login },
  { path: '/forget-password',   component: ForgetPassword },
  { path: '/reset-password', component: resetPassword},
  { path: '/home', component: Homepage}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


