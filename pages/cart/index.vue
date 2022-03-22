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
          :key="item.product.id"
          class="md:flex gap-8 border-b p-4 mt-4"
        >
          <div class="w-full md:w-2/4">
            <div>
              <div class="flex gap-4">
                <div class="w-24 h-24 overflow-hidden">
                  <img
                    :src="getProductPhoto(item.product.images)"
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
                  <div class="text-sm font-light">size:small</div>
                  <div class="text-sm font-light">color:Brown</div>
                  <div class="flex align-center">
                    <app-button
                      @click="
                        removeProductFromCart({
                          productId: item.product.id,
                          remove: true,
                        })
                      "
                      size="small"
                      >Delete</app-button
                    >
                    <app-button
                      @click="addToWishlist(item.product.id)"
                      size="small"
                      class="pl-2"
                      >Add to wishlist</app-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-10 md:pt-0 flex justify-between ">
            <div class="md:w-1/4">
              <div class="flex justify-center items-center gap-4">
                <app-button
                  @click="removeProductFromCart({ productId: item.product.id })"
                  size="small"
                  >-
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
                <span class="text-base font-light">{{
                  item.product.price
                }}</span>
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

        <p class="flex justify-end font-medium">
          NGN {{ (parseFloat(totalPrice) * 100) / 100 }}
        </p>

        <app-button
          @click="checkout"
          class="mt-6"
          color="primary"
          variant="contained"
          fullWidth
          >Checkout</app-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppButton from "@/components/buttons/Button.vue";
import axios from "axios";

export default {
  components: {
    "app-button": AppButton,
  },
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
    goBack() {
      this.$router.go(-1);
    },
    getProductPhoto(images) {
      const photos = JSON.parse(images);
      return photos[photos.length - 1];
    },

    //this checkout function creates order

    async checkout() {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlkIiwiaWF0IjoxNjQ1MTI1MzA1fQ.iCh8btvM7H4gFlV5YuXkZu_3Wl_5RC5RLzQnPx1B2jk";
      let payload = {
        customerId: this.$auth.user.firstName,
        customerEmail: this.$auth.user.email,
        products: [
          {
            name: this.$auth.user.lastName,
            id: "6225f03ad11fa8f700b8b876",
            quantity: 1,
          },
        ],
        total: this.totalPrice,
      };
      let res = await axios.post(
        "https://api-2445583927843.production.gw.apicast.io:443/api/order/?user_key=4fbc6c112a19f295d08dfc27f36333b6",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      console.log(res);
      this.$router.push("/checkout");
    },
  },
};
</script>
