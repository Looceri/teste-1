// src/stores/restaurants.js
import { defineStore } from 'pinia';

export const useRestaurantStore = defineStore('restaurants', {
  state: () => ({
    restaurants: [],
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
  },
});
