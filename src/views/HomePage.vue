<template>
  <div class="flex items-center justify-center h-screen">
    <div class="p-8 text-center bg-white rounded-lg shadow-2xl">
      <h1 class="mb-4 text-4xl font-bold text-gray-800">
        Bienvenido a la Página Principal
      </h1>
      <p class="mb-6 text-lg text-gray-600">
        Explora la lista de usuarios y descubre más información.
      </p>
      <router-link
        to="/usuarios"
        class="inline-block px-4 py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
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
