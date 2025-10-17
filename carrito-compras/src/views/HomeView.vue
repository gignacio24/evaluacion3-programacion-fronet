<template>
  <div class="container mt-4">
    <div class="row">
      <!-- Columna de productos -->
      <div class="col-md-7">
        <h1 class="mb-3">Productos disponibles</h1>
        <ProductList />
      </div>

      <!-- Columna del carrito -->
      <div class="col-md-5">
        <h1 class="mb-3">Productos en el carrito</h1>
        <ShoppingCart />
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue'
import ShoppingCart from '../components/ShoppingCart.vue'

export default {
  components: { ProductList, ShoppingCart }
}
</script>

<style scoped>
h2 {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
