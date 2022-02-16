<template>
  <div @click="viewProduct" class="w-52">
    <div class="w-48 h-48 cursor-pointer">
      <img :src="product.image" class="w-full h-full" alt="" />
    </div>
    <div class="text-sm mt-2 w-full">
      <h1
        class="font-light text-base text-primary-black cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis"
      >
        {{ product.title }}
      </h1>
      <div class="flex items-center">
        <p class="text-2xl font-bold">******</p>
        <p class="text-primary-blue ml-2.5">213</p>
      </div>
      <div class="flex items-center font-light my-2">
        <p>{{ product.price }} dollars</p>
        <p class="text-primary-gray-light ml-2.5">-18%</p>
      </div>
      <!-- <button
        class="bg-primary-blue rounded-sm font-light text-white w-32 py-2 focus:outline-none"
      >
        Add to cart
      </button> -->
      <app-button @click.stop="addToCart" variant="contained" size="small">
        Add to cart
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/buttons/Button.vue";

export default {
  components: {
    "app-button": AppButton,
  },
  props: ["product"],
  methods: {
    viewProduct() {
      this.$router.push(
        "/" + this.product.title.toLowerCase().split(" ").join("-")
      );
    },
    addToCart() {
      this.$store.commit("addItemToCart");
    },
  },
};
</script>
