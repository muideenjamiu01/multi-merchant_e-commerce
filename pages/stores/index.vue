<template>
  <app-container max-width="xl">
      <h1 class="text-2xl font-bold text-primary-black capitalize">
        Stores
      </h1>
      <grid-container align-items="center" class="my-4" gap="2">
        <product-filter
          v-for="cat in categories"
          :key="cat.name"
          v-model="category"
          :value="cat.name"
          @change="handleChange"
          >{{ cat.label }}</product-filter
        >
      </grid-container>
      <div
        v-if="loading"
        class="
          flex
          items-center
          justify-center
          w-full
          mt-12
        "
      >
        <loading-spinners size="large" color="primary" />
      </div>
      <offline v-else-if="$nuxt.isOffline"></offline>
      <h2 v-else-if="errors" class="text-2xl text-secondary-600">
        Oops... An error occurred.
      </h2>
      <div v-else class="flex flex-wrap items-center gap-5 my-8">
        <merchant-card
          v-for="merchant in merchants"
          :key="merchant.id"
          :merchant="merchant"
        />
      </div>
  </app-container>
</template>

<script>
import { mapGetters } from "vuex";
import MerchantCard from "@/components/contents/MerchantCard";

export default {
  components: {
    MerchantCard,
  },
  data() {
    return {
      category: "",
      categories: [
        {
          name: "computing",
          label: "Computing",
        },
        {
          name: "phones",
          label: "Phones & Tablets",
        },
        {
          name: "fashion",
          label: "Fashion",
        },
        {
          name: "home",
          label: "Home & offices",
        },
        {
          name: "electronics",
          label: "Electronic appliances",
        },
        {
          name: "gaming",
          label: "Gaming",
        },
      ]
    };
  },
  computed: {
    ...mapGetters({
      data: "merchants/getMerchants",
      loading: "merchants/loading",
      errors: "merchants/errors",
    }),
    merchants() {
      return this.data.map(user => ({
        id: user._id,
        storeName: user.storeName,
        accountName: user.accountName,
        banner: user.banner,
        description: user.description || "Aenean ultrices quam sed dolor laoreet, eu suscipit nibh hendrerit. In cursus tincidunt ipsum, quis volutpat urna. Etiam pulvinar purus orci, quis pharetra nunc consequat eu. Mauris sodales quam metus, id pharetra ligula tincidunt quis. Integer ligula ex, egestas sit amet ex ut, porta placerat purus.",
        avatar: user.avatar
      }))
    },
  },
  mounted() {
    this.$store.dispatch("merchants/fetchMerchants");
  },
  methods: {
    handleChange(e) {},
  }
};
</script>
