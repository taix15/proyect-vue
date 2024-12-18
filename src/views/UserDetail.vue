<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="mb-6 text-4xl font-bold text-blue-600">
      Detalles del Usuario
    </h1>
    <div v-if="user" class="p-6 bg-white rounded-lg shadow-lg w-80">
      <p class="mb-4 text-lg text-gray-700">
        <strong class="font-semibold">Nombre:</strong>
        {{ user.name }}
      </p>
      <p class="mb-4 text-lg text-gray-700">
        <strong class="font-semibold">Email:</strong>
        {{ user.email }}
      </p>
      <p class="mb-4 text-lg text-gray-700">
        <strong class="font-semibold">Teléfono:</strong>
        {{ user.phone }}
      </p>
    </div>
    <router-link 
      to="/usuarios" 
      class="px-4 py-2 mt-6 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
    >
      ← Volver atrás
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserDetail',
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const userId = this.$route.params.id;
    try {
      const response = await axios.get('/users.json');
      this.user = response.data.find(user => user.id === parseInt(userId));
      if (!this.user) {
        console.error('Usuario no encontrado');
      }
    } catch (error) {
      console.error('Error al obtener los detalles del usuario:', error);
    }
  },
};
</script>
