<!-- src/components/LogoutButton.vue -->
<template>
  <button @click="handleLogout">Logout</button>
</template>

<script>
import { useRestaurantStore } from '../stores/restaurants';

export default {
  name: 'LogoutButton',
  setup() {
    const restaurantStore = useRestaurantStore();

    const handleLogout = () => {
      restaurantStore.logout(); // Chama a ação de logout na store
      // Aqui você pode adicionar lógica adicional, como redirecionar o usuário para a página de login
    };

    return {
      handleLogout,
    };
  },
};
</script>

<style scoped>
/* Estilos específicos para o botão de logout */
button {
  padding: 10px 15px;
  background-color: #f44336; /* Vermelho para indicar logout */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
