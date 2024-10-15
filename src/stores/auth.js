// src/stores/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    perfil:  null,
  }),

  actions: {
    login(email, password) {
      if (email === 'cliente@email.com' && password === '12345678') {
        this.perfil = 'Cliente';
        alert('Bem-vindo, Cliente!');
      } else if (email === 'admin@email.com' && password === '12345678') {
        this.perfil = 'Admin';
        alert('Bem-vindo, Admin!');
      } else {
        alert('Credenciais inválidas');
      }
    },

    logout() {
      this.perfil = null;
      alert('Você foi deslogado.');
    }
  }
});
