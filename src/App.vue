<template>
  <div id="app">
    <nav>
      <router-link to="/">
        Inicio
      </router-link> |
      <router-link to="/usuarios">
        Usuarios
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
}
</style>
