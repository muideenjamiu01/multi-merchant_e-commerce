<template>
  <div class="py-8 px-4">
    <!-- <aside>
      <ContentsProductFilter />
    </aside> -->
    <main class="px-[50px]">
      <h1 class="text-2xl font-bold text-primary-black capitalize">
        {{ $route.query.category }}
      </h1>
      <div v-if="loading" class="flex justify-center items-center mt-64">
        <div><LoadingSpinners size="large" color="primary" /></div>
        <div><LoadingSpinners size="large" color="primary" /></div>
        <div><LoadingSpinners size="large" color="primary" /></div>
      </div>
      <p v-else-if="errors" class="text-2xl text-secondary-600">
        An error occurred or check your internet connection.
      </p>
      <div v-else class="grid-container mt-4">
        <ContentsProductCard
          v-for="(product, index) in products"
          :key="product._id"
          :product="product"
          :index="index"
          class="grid-item w-[200px]"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Spinner from "@/components/Loading/Spinners.vue";
import Container from "~/components/Container.vue";

export default {
  components: {
    "loading-spinner": Spinner,
    Container,
  },
  computed: mapGetters({
    products: "products/products",
    errors: "products/errors",
    loading: "products/loading",
  }),
  created() {
    this.$store.dispatch("products/fetchProducts", {
      category: this.$route.query.category || "",
    });
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    ...mapActions({ getSingleProduct: "products/getSingleProduct" }),
  },
};
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-wrap: wrap;
}
.grid-item {
  margin: 20px;
}
</style>
