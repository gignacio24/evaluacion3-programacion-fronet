<template>
  <div class="d-flex align-items-center mb-3 border-bottom pb-2">
    <!-- Imagen -->
    <img :src="producto.imagen" alt="producto" class="me-3" width="50" height="50" />

    <!-- Info -->
    <div class="flex-grow-1">
      <p class="mb-1">
        {{ producto.nombre }} - Precio $: {{ producto.precio }}
      </p>

      <!-- Botón -->
      <button class="btn btn-primary btn-sm" @click="$store.commit('agregarAlCarrito', producto)">
        <i class="bi bi-cart-plus"></i> Agregar al carrito
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    producto: Object
  }
}
</script>
