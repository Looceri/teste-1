<!-- src/components/RestaurantList.vue -->
<template>
  <div>
    <h2>Restaurantes</h2>
    <ul>
      <li v-for="restaurant in restaurantStore.restaurants" :key="restaurant.id">
        {{ restaurant.name }}
        <button @click="toggleRestaurant(restaurant.id)">
          {{ restaurant.active ? 'Desativar' : 'Ativar' }}
        </button>
        <button @click="removeRestaurant(restaurant.id)">Excluir</button>
        <ul>
          <li v-for="item in restaurant.menu" :key="item.id">
            {{ item.name }} - {{ item.price }} MT
            <button @click="removeMenuItem(restaurant.id, item.id)">Excluir</button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRestaurantStore } from '../stores/restaurants';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const restaurantStore = useRestaurantStore();

    const toggleRestaurant = (restaurantId) => {
      restaurantStore.toggleRestaurant(restaurantId);
    };

    const removeRestaurant = (restaurantId) => {
      restaurantStore.removeRestaurant(restaurantId);
    };

    const removeMenuItem = (restaurantId, itemId) => {
      restaurantStore.removeMenuItem(restaurantId, itemId);
    };

    return { restaurantStore, toggleRestaurant, removeRestaurant, removeMenuItem };
  },
});
</script>
