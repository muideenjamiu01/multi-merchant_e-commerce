<template>
  <div>
    <div class="py-8 px-4 flex">
      <aside>
        <ContentsProductFilter />
      </aside>
      <div>
        <main class="">
          <div class="grid-list ">
            <ContentsProductCard v-for="(product, index) in products"
          :key="product.id" :product="product"
          :index="index" />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default { computed: mapGetters({
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
  },}
</script>

<style>
.grid-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}</style>
