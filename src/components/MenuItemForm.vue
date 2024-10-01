<!-- src/components/MenuItemForm.vue -->
<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" placeholder="Nome do Item" required />
    <input v-model="description" placeholder="Descrição" required />
    <input v-model="price" type="number" placeholder="Preço" required />
    <input v-model="quantity" type="number" placeholder="Quantidade" required />
    <button type="submit">Adicionar Item</button>
  </form>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      name: '',
      description: '',
      price: '',
      quantity: '',
    };
  },
  emits: ['add-item'],
  methods: {
    submitForm() {
      const newItem = {
        name: this.name,
        description: this.description,
        price: this.price,
        quantity: this.quantity,
      };
      this.$emit('add-item', newItem);
      this.resetForm();
    },
    resetForm() {
      this.name = '';
      this.description = '';
      this.price = '';
      this.quantity = '';
    },
  },
});
</script>
