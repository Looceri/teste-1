<!-- src/views/ClientView.vue -->
<template>
  <div>
    <h1>Painel do Cliente</h1>
    asdasd
    <LogoutButton /> <!-- Adicionando o botão de Logout -->
    <h2>Restaurantes</h2>
    <ul>
      <li v-for="restaurant in restaurants" :key="restaurant.id">
        <a @click="selectRestaurant(restaurant)">{{ restaurant.name }}</a>
      </li>
    </ul>
    <!-- Resto do seu código -->
  </div>
</template>

<script>
import { useRestaurantStore } from '../stores/restaurants';
import LogoutButton from '../components/LogoutButton.vue';

export default {
  name: 'ClientView',
  components: {
    LogoutButton,
  },
  setup() {
    const restaurantStore = useRestaurantStore();
    const { restaurants, favoriteItems, selectedRestaurant } = restaurantStore;

    const selectRestaurant = (restaurant) => {
      restaurantStore.setSelectedRestaurant(restaurant);
    };

    const toggleOrder = (item) => {
      if (restaurantStore.hasOrdered(item)) {
        restaurantStore.cancelOrder(item);
      } else {
        restaurantStore.orderItem(item);
      }
    };

    const toggleFavorite = (item) => {
      if (restaurantStore.isFavorite(item)) {
        restaurantStore.removeFavorite(item);
      } else {
        restaurantStore.addFavorite(item);
      }
    };

    const isItemOrdered = (item) => {
      return restaurantStore.hasOrdered(item);
    };

    const isItemFavorite = (item) => {
      return restaurantStore.isFavorite(item);
    };

    return {
      restaurants,
      favoriteItems,
      selectedRestaurant,
      selectRestaurant,
      toggleOrder,
      toggleFavorite,
      isItemOrdered,
      isItemFavorite,
    };
  },
};
</script>

<style scoped>
/* Estilos específicos para ClientView */
</style>
