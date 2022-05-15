<template>
  <div class="shadow-lg w-[300px] rounded">
    <!-- header -->
    <div class="relative w-full h-36">
      <img
        :src="merchant.banner"
        :alt="merchant.storeName"
        class="w-full h-full"
      />
      <user-avatar
        :src="merchant.avatar"
        :alt="merchant.storeName"
        class="absolute w-20 h-20 left-4 bottom-10 shadow"
      />
    </div>
    <div class="mt-2 ml-[104px] flex-grow pr-4 mb-4">
      <nuxt-link
        :to="`/stores/${getSlug(merchant.storeName)}`"
        class="text-primary-500 truncate hover:text-primary-600"
      >
        {{ merchant.storeName }}
      </nuxt-link>
      <p class="mb-2 capitalize">
        <small>overall rating: {{ overallRating }}%</small>
      </p>
    </div>
    <!-- body -->
    <div class="p-4 pt-0">
      <p class="text-sm">{{ merchant.description }}</p>
    </div>
    <!-- footer -->
    <div class="flex gap-2 align-center flex-wrap pt-0 p-4">
      <nuxt-link
        v-for="(cat, i) in categories"
        :key="i"
        :to="`/products?category=${cat}`"
        class="
          rounded
          transition-color
          px-1
          text-sm text-primary-600
          hover:text-primary-700
          border border-solid border-primary-500
          bg-transparent
          hover:bg-primary-100
        "
      >
        <small>{{ cat }}</small>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import slugify from "@/helpers/slugify";

export default {
  name: "MerchantCard",
  props: {
    merchant: {
      type: Object,
      default: {},
    },
  },
  computed: {
    overallRating() {
      const cr = this.genRnValue();
      const ofr = this.genRnValue();
      const pq = this.genRnValue();

      return Math.ceil((cr + ofr + pq) / 3);
    },
    categories() {
      const categories = [];
      const numOfCats = Math.floor(Math.random() * 4) + 1;

      for (let i = 0; i < numOfCats; i++) {
        const cat = this.getRnCategories();
        if (!categories.includes(cat)) {
          categories.push(cat);
        }
      }
      return categories;
    },
  },
  methods: {
    getSlug(text) {
      return slugify(text);
    },
    getRnCategories() {
      const cats = [
        "phones",
        "computing",
        "fashion",
        "gaming",
        "electronics",
        "home",
      ];

      const cat = Math.floor(Math.random() * cats.length);
      return cats[cat];
    },
    genRnValue() {
      const value = Math.random() * 100;
      return value < 50 ? value + 50 : value;
    },
  },
};
</script>
