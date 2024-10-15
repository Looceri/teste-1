<!-- src/views/Contact.vue -->
<template>
  <div class="contact">
    <h1>Contato</h1>
    <p>Entre em contato conosco através das seguintes informações:</p>
    <ul>
      <li><strong>Email:</strong> contato@restaurantesaboroso.com</li>
      <li><strong>Telefone:</strong> +258 84 123 4567</li>
      <li><strong>Endereço:</strong> Rua das Flores, 123, Maputo, Moçambique</li>
    </ul>
    <h2>Formulário de Contato</h2>
    <form @submit.prevent="sendMessage">
      <div>
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div>
        <label for="message">Mensagem:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    sendMessage() {
      alert(`Mensagem enviada por ${this.form.name}!`);
      // Aqui você pode adicionar a lógica para enviar a mensagem para o servidor
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
  },
};
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: 0 auto;
}
form {
  display: flex;
  flex-direction: column;
}
form div {
  margin-bottom: 1rem;
}
</style>
