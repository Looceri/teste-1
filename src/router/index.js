import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue';
import ClientView from '../views/ClientView.vue';
import Services from '../views/ServicesView.vue';
import Contact from '../views/ContactView.vue';
import { useAuthStore } from '../stores/auth'; // Import the store where perfil is stored

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    },
    {
      path: '/home',
    name: 'cliente-home',
    component: ClientView,
    beforeEnter: (to, from, next) => {
      if (useAuthStore.perfil === 'Cliente') {
        next(); // Allow access for users with 'Cliente' perfil
      } else {
        next('/login'); // Redirect to login if perfil is not 'Cliente'
      }
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
    beforeEnter: (to, from, next) => {
      if (useAuthStore.perfil === 'Admin') {
        next(); // Allow access for users with 'Admin' perfil
      } else {
        next('/login'); // Redirect to login if perfil is not 'Admin'
      }
    }
  }
  ]
})

export default router
