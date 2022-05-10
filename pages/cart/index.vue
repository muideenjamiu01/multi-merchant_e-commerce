<template>
  <div class="max-w-7xl mx-auto py-4 px-4">
    <div @click="goBack" class="flex gap-4 mt-8">
      <img src="@/assets/images/icons/back-arrow.svg" alt="" />
      <h1 class="md:text-3xl font-medium">Shopping Cart</h1>
    </div>
    <div class="md:flex gap-8">
      <div v-if="itemsCount" class="md:w-3/4">
        <div
          v-for="item in cart"
          :key="item.product._id"
          class="md:flex gap-8 border-b p-4 mt-4"
        >
          <div class="w-full md:w-2/4">
            <div>
              <div class="flex gap-4">
                <div class="w-24 h-24 overflow-hidden">
                  <img
                    :src="item.product.images"
                    :alt="item.product.title"
                    class="w-full h-full"
                  />
                </div>
                <div class="flex flex-col">
                  <div>
                    <h3 class="text-base font-light">
                      {{ item.product.name }}
                    </h3>
                  </div>
                  <div class="text-sm font-light">
                    size:{{ item.product.size }}
                  </div>
                  <div class="text-sm font-light">
                    color:{{ item.product.color }}
                  </div>
                  <div class="flex align-center">
                    <app-button
                      @click="
                        removeProductFromCart({
                          productId: item.product._id,
                          remove: true,
                        })
                      "
                      size="small"
                      >Delete</app-button
                    >
                    <app-button
                      @click="addToWishlist(item.product)"
                      size="small"
                      class="pl-2"
                      >Add to wishlist</app-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-10 md:pt-0 flex justify-between">
            <div class="md:w-1/4">
              <div class="flex justify-center items-center gap-4">
                <app-button
                  @click="
                    removeProductFromCart({ productId: item.product._id })
                  "
                  size="small"
                >
                  -
                </app-button>
                <div
                  class="text-center font-semibold text-md text-gray-400 flex items-center"
                >
                  {{ item.quantity }}
                </div>
                <app-button
                  @click="addProductToCart(item.product)"
                  size="small"
                >
                  +
                </app-button>
              </div>
            </div>
            <div class="md:w-1/4">
              <div class="flex">
                <span class="text-base font-light"
                  >₦{{ Number(item.product.price).toLocaleString() }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="flex justify-center w-full">
        <h4 class="text-center text-secondary-500 text-xl font-medium">
          No item in your cart
        </h4>
      </div>

      <div
        v-show="itemsCount"
        class="mt-4 lg:mt-0 md:w-1/4 bg-primary-100 p-4 self-start"
      >
        <h1 class="">{{ `Subtotal (${itemsCount} items):` }}</h1>

        <p class="flex justify-end font-semibold">
          ₦ {{ Number((parseFloat(totalPrice) * 100) / 100).toLocaleString() }}
        </p>

        <app-button
          @click="createOrder"
          class="mt-6"
          color="primary"
          variant="contained"
          fullWidth
          >Checkout
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  computed: {
    ...mapGetters({
      cart: "cart/cartProducts",
      totalPrice: "cart/cartTotalPrice",
      itemsCount: "cart/cartItemsCount",
    }),
  },
  mounted() {
    const cart = window.localStorage.getItem("ys-cart");
    this.$store.commit("cart/setCart", cart);
  },
  methods: {
    ...mapActions("cart", ["addProductToCart", "removeProductFromCart"]),
    ...mapActions("wishlist", ["addToWishlist"]),
    ...mapActions("orders", ["createOrder"]),
    goBack() {
      this.$router.go(-1);
    },
    getProductPhoto(images) {
      const photos = JSON.parse(images);
      return photos[photos.length - 1];
    },
  },
};
</script>
