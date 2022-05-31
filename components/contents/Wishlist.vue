<template>
  <div class="">
    <div class="text-sm font-light py-4 border-t border-gray-100">
      <div class="">
        <div
          class="xs:flex items-center justify-between"
        >
          <div class="xs:flex">
            <div class="w-24 h-full mr-4">
              <img
                :src="product.images"
                :alt="product.title"
                class="w-full h-full"
              />
            </div>
            <div class="space-y-0.5">
              <h3 class="font-medium ">
                {{ product.name }}
              </h3>
              <p class="capitalize">Size: {{ product.size }}</p>
              <p>Color:{{ product.color }}</p>
              <!-- <p  class="font-medium">Price:₦{{Number(product.price).toLocaleString() }}</p> -->
              <!-- <p>Quantity:{{ product.quantity }}</p> -->

              <app-button
                @click="removeFromWishlist(product._id)"
                size="small"
                color="error"
              >
                Delete
              </app-button>
            </div>
          </div>

          <div class="sm:flex items-center sm:space-x-6 space-y-2 sm:space-y-0" >
            <p class=" w-24">₦ {{Number(product.price).toLocaleString()}}</p>
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

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("cart", ["addProductToCart", "removeProductFromCart"]),
    ...mapActions("wishlist", ["fetchWishlist", "removeFromWishlist"]),
	
  },
};
</script>
