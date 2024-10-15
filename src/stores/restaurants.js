// src/stores/restaurants.js
import { defineStore } from 'pinia';

export const useRestaurantStore = defineStore('restaurants', {
  state: () => ({
    restaurants: [],
    selectedRestaurant: null,
    favoriteItems: [],
    orders: [],
  }),
  actions: {
    addRestaurant(restaurant) {
      this.restaurants.push({ ...restaurant, active: true });
    },
    removeRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(r => r.id !== restaurantId);
    },
    toggleRestaurant(restaurantId) {
      const restaurant = this.restaurants.find(r => r.id === restaurantId);
      if (restaurant) {
        restaurant.active = !restaurant.active;
      }
    },
    addMenuItem(restaurantId, item) {
      const restaurant = this.restaurants.find(r => r.id === restaurantId);
      if (restaurant) {
        if (!restaurant.menu) {
          restaurant.menu = [];
        }
        restaurant.menu.push(item);
      }
    },
    removeMenuItem(restaurantId, itemId) {
      const restaurant = this.restaurants.find(r => r.id === restaurantId);
      if (restaurant && restaurant.menu) {
        restaurant.menu = restaurant.menu.filter(item => item.id !== itemId);
      }
    },
    setSelectedRestaurant(restaurant) {
      this.selectedRestaurant = restaurant;
    },
    addFavorite(item) {
      if (!this.favoriteItems.includes(item)) {
        this.favoriteItems.push(item);
      }
    },
    removeFavorite(item) {
      this.favoriteItems = this.favoriteItems.filter(i => i.id !== item.id);
    },
    orderItem(item) {
      this.orders.push(item);
    },
    cancelOrder(item) {
      this.orders = this.orders.filter(i => i.id !== item.id);
    },
    hasOrdered(item) {
      return this.orders.some(i => i.id === item.id);
    },
    isFavorite(item) {
      return this.favoriteItems.some(i => i.id === item.id);
    },
    logout() {
      this.userProfile = null; // Define o perfil como nulo
      this.selectedRestaurant = null; // Reinicia a seleção do restaurante
      this.favoriteItems = []; // Limpa os itens favoritos
      this.orders = []; // Limpa os pedidos
    },
  },
});
