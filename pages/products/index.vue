<template>
  <!-- <div class="py-8 px-4 flex"> -->
    <app-container maxWidth="xl">
    <aside>
      <ContentsProductFilter />
    </aside>
    <main class="">
      <h1 class="text-2xl font-bold text-primary-black capitalize">
        {{ $route.query.category }}
      </h1>
      <loading-spinner v-if="loading" size="large" />
      <p v-else-if="errors" class="text-2xl text-secondary-600">
        An error occurred.
      </p>
      <div class="grid-container mt-4">
        <ContentsProductCard
          v-for="(product, index) in products"
          :key="product._id"
          :product="product"
          :index="index"
          class="grid-item"
        />
      </div>
    </main>
    </app-container>
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
    this.$store.dispatch("products/fetchProducts", {
      category: this.$route.query.category || ''
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
