<template>
  <div class="py-8 px-4 flex">
    <aside>
      <ContentsProductFilter />
    </aside>
    <main class="">
      <h1 class="text-2xl font-bold text-primary-black capitalize">
        {{ $route.params.catalog }}
      </h1>
      <div class="grid-list mt-4">
        <ContentsProductCard
          v-for="(product, index) in products"
          :key="product.id"
          :product="product"
          :index="index"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters({ products: "products/products" }),
  created() {
    this.$store.dispatch("products/fetchProducts");
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    ...mapActions({getSingleProduct: 'products/getSingleProduct'})
  },
};
</script>

<style scoped>
.grid-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}
</style>