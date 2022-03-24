<template>
  <div>
    <div @click="viewProduct(index)" class="h-48 cursor-pointer">
      <img :src="getProductImage(product.images)" class="w-[200px] h-full" :alt="product.name" />
    </div>
    <div @click="viewProduct" class="text-sm mt-2 w-full">
      <h1
        class="
          font-medium
          text-xl text-secondary-900
          hover:text-black
          cursor-pointer
          whitespace-nowrap
          overflow-hidden
          text-ellipsis
        "
      >
        {{ product.name }}
      </h1>
      <div class="flex items-center">
        <p class="text-2xl font-bold">******</p>
        <p class="text-primary-blue ml-2.5">213</p>
      </div>
      <div class="flex items-center font-light my-2">
        <p>{{ product.price }} NGN</p>
        <p class="text-primary-gray-light ml-2.5">-{{product.quantity}} %</p>
      </div>
    </div>
    <app-button
      @click="addProductToCart(product)"
      variant="contained"
      size="small"
    >
      Add to cart
    </app-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AppButton from "@/components/buttons/Button.vue";

export default {
  components: {
    "app-button": AppButton,
  },
  props: {
    product: {},
    index: {},
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    viewProduct(index) {
      this.$router.push(
        "/" + this.product.name.toLowerCase().split(" ").join("-")
      );
      this.$store.dispatch("products/getSingleProduct", index);
    },
   
    getProductImage(images) {
      // return images[0]
      return "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfrWOGqkDUrw7FM0SJsZ6BinOjvh2hgSbbkGvmMm-5aNTaD2fKk8f9ovJPw9vzurnsUVezIdLHXw&usqp=CAc"
    },
  },
};
</script>
