<template>
  <div>
    <div v-for="p in $store.state.productos" :key="p.id">
      <ProductCard :producto="p" />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  components: { ProductCard }
}
</script>
