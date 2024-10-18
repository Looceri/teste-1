import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue';
import ClientView from '../views/ClientView.vue';
import Services from '../views/ServicesView.vue';
import Contact from '../views/ContactView.vue';
import { useAuthStore } from '../stores/auth'; // Importa a store

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services', component: Services
    },
    {
      path: '/contact', component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'cliente-home',
      component: ClientView,
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore(); // Chama a store dentro do guard
        if (authStore.perfil === 'Cliente') {
          console.log(authStore.perfil )
          next(); // Permite o acesso
        } else {
          next('/login'); // Redireciona para login se o perfil não for 'Cliente'
        }
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminView,
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore(); // Chama a store dentro do guard
        if (authStore.perfil === 'Admin') {
          console.log(authStore.perfil )
          next(); // Permite o acesso
        } else {
          next('/login'); // Redireciona para login se o perfil não for 'Admin'
        }
      }
    }
  ]
})

export default router;
