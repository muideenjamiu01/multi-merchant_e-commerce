<template>
  <div class="px-4 py-8 flex">
    <aside>
      <ContentsCustomerProfileCard />
    </aside>
    <main class="w-full">
      <h1 class="text-2xl mb-10">Your Wishlist</h1>
      <loading-spinner v-if="loading" size='large' />
      <p v-else-if="errors" class="text-2xl text-secondary-600 text-center">An error occurred.</p>
      <ContentsWishlist :products="wishlist" />
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters({
    wishlist: "wishlist/products",
    loading: "wishlist/loading",
    errors: "wishlist/errors",
  }),
  mounted() {
      this.$store.dispatch("wishlist/fetchWishlist");
  },
  methods: {
    ...mapActions(["fetchWishlist"]),
  },
};
</script>