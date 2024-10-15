<template>
  <main>
    <!-- Add navigation links for services, contact, and about pages -->
    <nav>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
    </nav>
   <!-- Check if the user is logged in before displaying content -->
    <template v-if="currentPerfil">
      <!-- Add content for logged-in users here -->
    </template>
    <template v-else>
      <!-- Redirect to login page if not logged in -->
      <router-link to="/login">Login</router-link>
    </template>
  </main>
</template>

<script setup>
import { useAuthStore  } from '../stores/auth';
const currentPerfil = useAuthStore .perfil;

</script>
