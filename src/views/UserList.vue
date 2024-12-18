<template>
  <div class="max-w-3xl p-4 mx-auto ">
    <h1 class="mb-6 text-2xl font-semibold text-center">Lista de usuarios</h1>
    <ul class="space-y-4">
      <li 
        v-for="user in users" 
        :key="user.id"
        class="p-4 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
      >
        <router-link 
          :to="'/usuarios/' + user.id"
          class="text-lg text-blue-500 hover:text-blue-700"
        >
          {{ user.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserList',
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('/users.json');
      this.users = response.data;  
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  },
};
</script>
