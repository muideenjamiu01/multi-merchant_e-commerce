<template>
    <app-container maxWidth="xl">
    <main class="my-8">
      <h1 class="text-2xl font-bold text-primary-black capitalize">
        {{ $route.query.category }}
      </h1>
      <div v-if="loading" class="flex items-center justify-center w-full h-[calc(100vh_-_56px_-_64px)]">
        <loading-spinners size="large" color="primary" />
      </div>
      <h2 v-else-if="errors" class="text-2xl text-secondary-600">
        An error occurred or check your internet connection.
      </h2>
      <div v-else class="grid-container mt-8">
        <ContentsProductCard
          v-for="(product, index) in products"
          :key="product._id"
          :product="product"
          :index="index"
        />
      </div>
    </main>
    </app-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters({
    products: "products/products",
    errors: "products/errors",
    loading: "products/loading",
  }),
  async created() {
    if (this.$auth.loggedIn) {
      await this.$store.dispatch("wishlist/fetchWishlist")
    }

    await this.$store.dispatch("products/fetchProducts", {
      category: this.$route.query.category || "",
    });
        console.log(this.products)
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    ...mapActions({ getSingleProduct: "products/getSingleProduct" }),
    ...mapActions("wishlist", ["fetchWishlist"]),
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
}
</style>
