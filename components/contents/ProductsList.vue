<template>
  <div class="flex flex-wrap items-center gap-5 my-8">
      <div
        v-if="loading"
        class="flex items-center justify-center w-full h-12"
      >
        <loading-spinners size="large" color="primary" />
      </div>
      <h2 v-else-if="errors" class="text-2xl text-secondary-600">
        Oops... An error occurred.
      </h2>
    <ContentsProductCard
      v-for="(product, index) in products"
      v-else
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
