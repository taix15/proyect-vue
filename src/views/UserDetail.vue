<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
   
    <h1 class="text-4xl font-bold text-blue-600 mb-6">
      Detalles del Usuario
    </h1>

  
    <div v-if="user" class=" bg-white shadow-lg rounded-lg p-6 w-80">
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
      class="mt-6 text-blue-500 hover:underline font-medium"
    >
      ← Volver a la lista
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
