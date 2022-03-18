<template>
  <div class="flex mt-8 px-4">
    <aside>
      <ContentsMerchantProfileCard />
    </aside>
    <main class="w-full text-sm">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl">Products</h1>
        <NuxtLink to="products/newproduct">
          <!-- <button class="py-2 px-4 bg-primary-blue text-white text-sm rounded">
          Add Product
        </button> -->
          <app-button to="products/newproduct" size="small" variant="contained">
            Add Product
          </app-button>
        </NuxtLink>
      </div>
      <div>
        <table
          class="text-primary-black text-sm mt-7 text-left w-full max-h-128 overflow-scroll"
        >
          <thead class="py-3 border-b font-medium text-center">
            <tr>
              <th class="pb-3 text-left">Transaction ID</th>
              <th class="pb-3">Price</th>
              <th class="pb-3">Discount (%)</th>
              <th class="pb-3">Sold</th>
              <th class="pb-3">Avg. Rating</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="product in products" :key="product.id" class="border-b">
              <td class="flex gap-4 py-3 text-left">
                <div class="h-24 w-24">
                  <img :src="product.images" class="w-full h-full" alt="" />
                </div>
                <div>
                  <h1>
                    {{ product.name }}
                  </h1>
                  <!-- <p>Sizes: {{product.size}}</p> -->
                  <!-- <p>Colors:{{ product.colors }}</p> -->
                  <p>Quantity: {{ product.inventory }}</p>
                </div>
              </td>
              <td>{{ product.price }}</td>
              <td>{{ Math.floor(Math.random() * 40) }}%</td>
              <td>{{ product.sold }}</td>
              <td>{{ Math.floor(Math.random() * 5) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppButton from "@/components/buttons/Button.vue";

export default {
  layout: "merchant",
  components: {
    "app-button": AppButton,
  },
  computed: mapGetters({
    products: "products/products",
  }),
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  created() {
    this.$store.dispatch("products/fetchProducts");
  },
};
</script>
