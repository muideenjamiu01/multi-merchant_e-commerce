<template>
  <div class="text-sm font-light pt-4 border-t border-gray-100 mb-6">
    <div
      v-for="product in products"
      :key="product.id"
      class="md:flex items-center justify-between"
    >
      <div class="sm:flex">
        <div class="w-24 h-24 mr-4">
          <img :src="getProductPhoto(product.images)" :alt="product.title" class="w-full h-full" />
        </div>
        <div class="space-y-0.5">
          <h3 class="text-md font-medium">
            {{ product.name }}
          </h3>
          <app-button
            @click="removeFromWishlist(product.id)"
            size="small"
            color="error"
          >
            Delete
          </app-button>
        </div>
      </div>

      <div class="md:flex items-center md:space-x-6">
        <p>{{ product.price }}</p>
        <app-button @click="addProductToCart(product)" variant="contained">
          Add to cart
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AppButton from "@/components/buttons/Button.vue";

export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  components: {
    "app-button": AppButton,
  },
  methods: {
    ...mapActions("wishlist", ["removeFromWishlist"]),
    ...mapActions("cart", ["addProductToCart"]),
    getProductPhoto(images) {
      const photos = JSON.parse(images)
      return photos[photos.length - 1]
    }
  },
};
</script>