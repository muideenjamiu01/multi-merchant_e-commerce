<template>
  <div class="py-8 px-4 flex">
    <aside>
      <ContentsProductFilter />
    </aside>
    <main class="">
      <h1 class="text-2xl font-bold text-primary-black capitalize">
        {{ $route.params.catalog }}
      </h1>
      <loading-spinner v-if="true" size="large" />
      <p v-else-if="errors" class="text-2xl text-secondary-600">
        An error occurred.
      </p>
      <div v-else class="grid-list mt-4">
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
import Spinner from "@/components/Loading/Spinners.vue";

export default {
  components: {
    "loading-spinner": Spinner,
  },
  computed: mapGetters({
    products: "products/products",
    errors: "products/errors",
    loading: "products/loading",
  }),
  created() {
    this.$store.dispatch("products/fetchProducts");
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    ...mapActions({ getSingleProduct: "products/getSingleProduct" }),
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
