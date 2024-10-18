<!-- src/components/AdminPanel.vue -->
<template>
  <div>
    <h1>Painel de Administrador</h1>
    <LogoutButton @click="logout" /> <!-- Adicionando o botão de Logout -->
    <RestaurantList />
    <MenuItemForm @add-item="addMenuItem" />
    <button @click="addRestaurant">Adicionar Restaurante</button>
  </div>
</template>

<script>
import RestaurantList from './RestaurantList.vue';
import MenuItemForm from './MenuItemForm.vue';
import { useRestaurantStore } from '../stores/restaurants';
import LogoutButton from './LogoutButton.vue';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

export default {
  components: {
    RestaurantList,
    MenuItemForm,
    LogoutButton
  },
  setup() {
    const restaurantStore = useRestaurantStore();

    const addRestaurant = () => {
      const restaurantName = prompt('Nome do Restaurante:');
      if (restaurantName) {
        restaurantStore.addRestaurant({ id: Date.now(), name: restaurantName });
      }
    };
    const logout = () => {
      const authStore = useAuthStore();
      authStore.logout(); // Chame a função de logout do AuthStore
      router.push({ name: 'login' });
    };
    const addMenuItem = (item, restaurantId) => {
      restaurantStore.addMenuItem(restaurantId, { ...item, id: Date.now() });
    };

    return { addRestaurant, addMenuItem,LogoutButton,logout };
  },
};
</script>
