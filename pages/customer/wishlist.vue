<template>
  <div class="px-4 py-8 flex">
    <aside>
      <ContentsCustomerProfileCard />
    </aside>
    <main class="w-full">
      <h1 class="text-2xl mb-10">Your Wishlist</h1>
      <ContentsWishlist :products="wishlist" />
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters({
    wishlist: "wishlist/products",
    errors: "wishlist/errors",
    isLoading: "wishlist/isLoading",
  }),
  mounted() {
      this.$store.dispatch("wishlist/fetchWishlist");
  },
  methods: {
    ...mapActions(["fetchWishlist"]),
  },
};
</script>