<template>
  <app-container maxWidth="xl">
    <main class="my-8">
      <h1 class="text-2xl font-bold text-primary-black capitalize">
        {{ getCategory }}
      </h1>
      <grid-container alignItems="center" class="my-4" gap="4">
        <product-filter v-for="cat in categories" :key="cat.name" v-model="category" :value="cat.name" @change="handleChange">{{ cat.label }}</product-filter>
      </grid-container>
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
import ProductFilter from "@/components/ProductFilter.vue"

export default {
  components: {
    "product-filter": ProductFilter
  },
  data() {
    return {
      category: this.$route.query.category,
      categories: [
        {
          name: "computing",
          label: "Computing"
        },
        {
          name: "phones",
          label: "Phones & Tablets"
        },
        {
          name: "fashion",
          label: "Fashion"
        },
        {
          name: "home",
          label: "Home & offices"
        },
        {
          name: "electronics",
          label: "Electronic appliances"
        },
        {
          name: "gaming",
          label: "Gaming"
        },
      ]
    }
  },
  async created() {
    if (this.$auth.loggedIn) {
      await this.$store.dispatch("wishlist/fetchWishlist")
    }

    await this.$store.dispatch("products/fetchProducts", {
      category: this.category || "",
    });
  },
  computed: {
    ...mapGetters({
      products: "products/products",
      errors: "products/errors",
      loading: "products/loading",
    }),
    getCategory() {
      return this.categories.filter(cat => cat.name === this.category)[0].label
    }
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    ...mapActions({ getSingleProduct: "products/getSingleProduct" }),
    ...mapActions("wishlist", ["fetchWishlist"]),
    handleChange(e) {
      this.$router.push({ path: "/products", query: { category: this.category }})

      this.$store.dispatch("products/fetchProducts", {
        category: this.category || "",
      });
    }
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
