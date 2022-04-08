<template>
  <div>
    <div class="h-56 cursor-pointer" @click="viewProduct(index)">
      <img :src="getProductImage(product.images)" class="w-full h-full" :alt="product.name" />
    </div>
    <div @click="viewProduct" class="text-sm w-full">
      <h1
        class="
          font-medium
          text-xl hover:text-primary-700
          text-black
          cursor-pointer
          whitespace-nowrap
          overflow-hidden
          text-ellipsis
        "
      >
        {{ product.name }}
      </h1>
      <div class="flex items-center">
        <div class="text-primary-blue ml-2.5 w-[30px]" :style="`background-color:${product.color}`">&nbsp;</div>
      </div>
      <div class="flex items-center font-light my-2">
        <p class="font-semibold text-lg">
          ₦ {{ Number(product.price).toLocaleString() }}
          <small class="text-secondary-500 ml-2">-{{product.quantity}} %</small>
        </p>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <app-button
        @click="addProductToCart(product)"
        variant="contained"
        size="small"
        color="primary"
      >
        Add to cart
      </app-button>
      <icon-button
        v-if="product.inWishlist"
        size="small"
        aria-label="Remove from wishlist"
        title="Remove from wishlist"
        @click="removeFromWishlist(product._id)"
      >
        <wishlist-icon class="text-pink-500"></wishlist-icon>
      </icon-button>
      <icon-button
        v-else
        size="small"
        aria-label="Save to wishlist"
        title="Save to wishlist"
        @click="addToWishlist(product._id)"
      >
        <wishlist-outline-icon size="small" class="text-pink-500" />
      </icon-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import WishlistIcon from "@/components/svg/Wishlist.vue"
import WishlistOutlineIcon from "@/components/svg/WishlistOutline.vue"

export default {
  components: {
    'wishlist-icon': WishlistIcon,
    'wishlist-outline-icon': WishlistOutlineIcon
  },
  props: {
    product: {},
    index: {},
  },
  mounted() {
        console.log(this.product)
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    ...mapActions("wishlist", ["addToWishlist", "removeFromWishlist"]),

    viewProduct() {
      const rn = Math.ceil(Math.random() * 1000000)
      this.$router.push( 
        this.product.name.toLowerCase().split(" ").join("-") + "-" + rn
      );
      this.$store.dispatch("products/getSingleProduct", this.product);
    },

    getProductImage(images) {
      return images[0]
    },
  },
};
</script>
