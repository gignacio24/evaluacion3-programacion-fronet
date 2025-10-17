<template>
  <div>
    <div
      v-for="p in $store.state.carrito"
      :key="p.id"
      class="d-flex align-items-center mb-3 border-bottom pb-2"
    >
      <!-- Imagen -->
      <img :src="p.imagen" alt="producto" class="me-3" width="50" height="50" />
      
      <!-- Info -->
      <div class="flex-grow-1">
        <p class="mb-1">
          {{ p.nombre }} - Cantidad: {{ p.cantidad }}
        </p>

        <!-- Botón remover -->
        <button
          class="btn btn-primary btn-sm"
          @click="$store.commit('removerDelCarrito', p.id)"
        >
          <i class="bi bi-trash"></i> Remover del carrito
        </button>
      </div>
    </div>

    <!-- Total a pagar -->
    <h1 class="mt-3 fw-bold">
      Total a pagar: ${{ $store.getters.totalPagar }}
    </h1>
  </div>
</template>
