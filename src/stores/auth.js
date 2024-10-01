// src/stores/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  // Estado inicial
  state: () => ({
    perfil: localStorage.getItem('perfil') || null, // Carrega o perfil da sessão (se houver)
  }),

  actions: {
    // Método para login
    login(email, password) {
      if (email === 'cliente@email.com' && password === '12345678') {
        this.perfil = 'Cliente';
        localStorage.setItem('perfil', 'Cliente'); // Salva o perfil no localStorage
        alert('Bem-vindo, Cliente!');
      } else if (email === 'admin@email.com' && password === '12345678') {
        this.perfil = 'Admin';
        localStorage.setItem('perfil', 'Admin'); // Salva o perfil no localStorage
        alert('Bem-vindo, Admin!');
      } else {
        alert('Credenciais inválidas');
      }
    },

    // Método para logout
    logout() {
      this.perfil = null;
      localStorage.removeItem('perfil'); // Remove o perfil do localStorage ao deslogar
      alert('Você foi deslogado.');
    }
  }
});

export const store = useAuthStore;
