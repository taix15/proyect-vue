<template>
  <div class="flex items-center justify-center h-screen bg-gradient-to-br from-blue-400 to-purple-600">
    <div class="text-center p-8 bg-white shadow-2xl rounded-lg">
     
      <h1 class="text-4xl font-bold text-gray-800 mb-4">
        Bienvenido a la Página Principal
      </h1>

      
      <p class="text-gray-600 text-lg mb-6">
        Explora la lista de usuarios y descubre más información.
      </p>

     
      <router-link
        to="/usuarios"
        class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
      >
        Ver Lista de Usuarios
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
