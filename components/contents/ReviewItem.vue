<template>
  <div class="my-8">
    <div class="flex items-center mb-2 curor-pointer" @click="viewProduct()">
      <div class="w-12 h-12">
        <img :src="review.image" :alt="review.name" class="w-full h-full" />
      </div>
      <h3 class="font-medium text-sm flex-grow ml-2">
          {{ review.name }}
      </h3>
    </div>

    <div class="my-2">
      <h4 class="font-medium text-sm flex-grow">
        {{ review.customerName }}
      </h4>
      <div class="flex items-center gap-2">
        <ContentsRating class="mr-[6px]" :rating="getRating" ratingLabel="" />
        <p class="text-sm">rating on {{ new Date(review.createdAt).toLocaleDateString("en-US") }}</p>
      </div>
      <p class="text-sm my-2">{{ review.comment }}</p>
    </div>
  </div>
</template>

<script>
import slugify from "@/helpers/slugify"

export default {
  name: "ReviewItem",
  props: {
    review: {
      type: Object,
      default: [],
    },
  },
  computed: {
    getRating() {
      return Math.floor(Math.random() * 5) + 1;
    },
  },
    viewProduct() {
      const slug = slugify(`${this.product.name} ${this.product._id}`)
      this.$router.push(slug);
      this.$store.dispatch("products/getSingleProduct", this.product);
    }
};
</script>
