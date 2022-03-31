<template>
  <div class="">
    <div class="text-sm font-light pt-4 border-t border-gray-100 mb-6 my-8">
      <div class="md:px-32">
        <div
          v-for="product in products"
          :key="product._id"
          class="md:flex items-center justify-between mt-4 md:border rounded-md p-8"
        >
          <div class="sm:flex">
            <div class="w-24 h-full mr-4">
              <img
                :src="product.images"
                :alt="product.title"
                class="w-full h-full"
              />
            </div>
            <div class="space-y-0.5">
              <h3 class="font-medium">
                {{ product.name }}
              </h3>
              <p>Size:{{ product.size }}</p>
              <p>Color:{{ product.color }}</p>
              <p>Price:{{ product.price }}</p>
              <p>Quantity:{{ product.quantity }}</p>

              <app-button
                @click="removeFromWishlist(product._id)"
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
    ...mapActions("cart", ["addProductToCart", "removeProductFromCart"]),
    ...mapActions("wishlist", ["fetchWishlist", "removeFromWishlist"]),
  },
  mounted() {
    console.log(this.products);
  },
};
</script>
