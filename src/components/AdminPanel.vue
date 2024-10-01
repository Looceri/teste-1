<!-- src/components/AdminPanel.vue -->
<template>
  <div>
    <h1>Painel de Administrador</h1>
    <RestaurantList />
    <MenuItemForm @add-item="addMenuItem" />
    <button @click="addRestaurant">Adicionar Restaurante</button>
  </div>
</template>

<script>
import RestaurantList from './RestaurantList.vue';
import MenuItemForm from './MenuItemForm.vue';
import { useRestaurantStore } from '../stores/restaurants';

export default {
  components: {
    RestaurantList,
    MenuItemForm,
  },
  setup() {
    const restaurantStore = useRestaurantStore();

    const addRestaurant = () => {
      const restaurantName = prompt('Nome do Restaurante:');
      if (restaurantName) {
        restaurantStore.addRestaurant({ id: Date.now(), name: restaurantName });
      }
    };

    const addMenuItem = (item, restaurantId) => {
      restaurantStore.addMenuItem(restaurantId, { ...item, id: Date.now() });
    };

    return { addRestaurant, addMenuItem };
  },
};
</script>
