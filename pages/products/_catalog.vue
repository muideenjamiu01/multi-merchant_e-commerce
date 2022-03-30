<template>
  <div class="py-8 px-4 flex">
    <aside>
      <ContentsProductFilter />
    </aside>
    <main class="">
      <h1 class="text-2xl font-bold text-primary-black capitalize">
        {{ $route.params.catalog }}
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Spinner from "@/components/Loading/Spinners.vue";
const category = this.$route.params.catalog

export default {
    data () {
      return {
        category : ""
      }
    },
    
    components: {
      "loading-spinner": Spinner,
    },

    computed: mapGetters({
      products: "products/products",
      errors: "products/errors",
      loading: "products/loading",
    }),

    mounted() {
      this.$store.dispatch("products/fetchProducts", {category});
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
