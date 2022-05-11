<template>
  <div>
    <div class="h-56 cursor-pointer" @click="viewProduct()">
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
      <div v-if="$auth.loggedIn" class="">
        <icon-button
          v-if="product.inWishlist"
          size="small"
          aria-label="Remove from wishlist"
          title="Remove from wishlist"
          @click="updateProductInWishlist(product)"
        >
          <wishlist-icon class="text-pink-500"></wishlist-icon>
        </icon-button>
        <icon-button
          v-else
          size="small"
          aria-label="Save to wishlist"
          title="Save to wishlist"
          @click="updateProductInWishlist(product, true)"
        >
          <wishlist-outline-icon size="small" class="text-pink-500" />
        </icon-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import slugify from "@/helpers/slugify"
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
  computed: {
    ...mapGetters({ wishlist: "wishlist/products" })
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    viewProduct() {
      const slug = slugify(`${this.product.name} ${this.product._id}`)
      this.$router.push(slug);
      this.$store.dispatch("products/getSingleProduct", this.product);
    },
    getProductImage(images) {
      return images[0]
    },
    async updateProductInWishlist(product, add = false) {
      if (add) {
        await this.$store.dispatch('wishlist/addToWishlist', product)
      } else {
        await this.$store.dispatch('wishlist/removeFromWishlist', product._id)
      }

      this.$store.commit('products/setProductWishlistKey', this.wishlist)
    }
  },
};
</script>
