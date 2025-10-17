<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark px-3">
      <a class="navbar-brand" href="#">Tienda Vue</a>
      <div class="navbar-nav">
        <router-link to="/" class="nav-link">Inicio</router-link>
      </div>
    </nav>
    <div class="container mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>
