<template>
  <div class="py-8 px-4 flex">
    <aside>
      <ContentsProductFilter />
    </aside>
    <div>
      <main class="">
        <h1 class="text-2xl font-bold text-primary-black capitalize">
          {{ $route.params.catalog }}
        </h1>
        <div class="grid grid-cols-4 gap-x-4 gap-y-6 mt-4">
          <ContentsProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("productItems/getProducts");
  },
  computed: mapGetters({ products: "productItems/allProducts" }),
};
</script>
