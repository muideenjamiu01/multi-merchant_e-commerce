<template>
  <div class="flex flex-wrap justify-center gap-5 my-8">
      <div
        v-if="loading"
        class="flex items-center justify-center w-full h-12"
      >
        <loading-spinners size="large" color="primary" />
      </div>
      <offline v-else-if="$nuxt.isOffline"></offline>
      <h2 v-else-if="errors" class="text-2xl text-secondary-600">
        Oops... An error occurred.
      </h2>
          <h2 v-else-if="products.length === 0" class="text-2xl text-secondary-600">
            This merchants has no products to display.
          </h2>
    <ContentsProductCard
      v-for="(product, index) in products"
      :key="product._id"
      :product="product"
      :index="index"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductsList",
  data() {
    return {
        page: 1
    }
  },
  computed: mapGetters({
    products: "merchants/getMerchantProducts",
    loading: "merchants/loading",
    errors: "merchants/errors",
  }),
  async created() {
    if (this.$auth.loggedIn) {
      await this.$store.dispatch("wishlist/fetchWishlist");
    }

    await this.$store.dispatch("merchants/fetchMerchantProducts", {
      page: this.page,
    });
  },
  methods: {
    ...mapActions("wishlist", ["fetchWishlist"])
  }
};
</script>
