<template>
  <app-container max-width="xl">
      <h1 class="text-2xl font-bold text-primary-black my-8 capitalize">
        Stores
      </h1>
      <grid-container align-items="center" class="my-4" gap="2">
        <product-filter
          v-for="cat in categories"
          :key="cat.name"
          v-model="category"
          :value="cat.name"
          @change="filterMerchants">{{ cat.label }}</product-filter
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
      <div v-else class="flex flex-wrap justify-center gap-5 my-8">
        <template v-if="merchants.length > 0">
          <merchant-card
            v-for="merchant in merchants"
            :key="merchant.id"
            :merchant="merchant"
          />
        </template>
        <template v-else>
          <h2 class="text-2xl text-secondary-600">
            There are no merchants to display.
          </h2>
        </template>
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
      page: 1,
      categories: [
        {
          name: "computing",
          label: "Computing",
        },
        {
          name: "phonesAndTablets",
          label: "Phones & Tablets",
        },
        {
          name: "fashion",
          label: "Fashion",
        },
        {
          name: "homeAndOffices",
          label: "Home & offices",
        },
        {
          name: "electronicAppliances",
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
        banner: user.storeBanner || "https://dummyimage.com/1344x400/cc5ca5/fff.png&text=Your+banner+goes+here.",
        categories: user.category,
        description: user.description || "Aenean ultrices quam sed dolor laoreet, eu suscipit nibh hendrerit. In cursus tincidunt ipsum, quis volutpat urna. Etiam pulvinar purus orci, quis pharetra nunc consequat eu. Mauris sodales quam metus, id pharetra ligula tincidunt quis. Integer ligula ex, egestas sit amet ex ut, porta placerat purus.",
        avatar: user.avatar
      }))
    },
  },
  mounted() {
    this.$store.dispatch("merchants/fetchMerchants", {
        page: this.page
      });
  },
  methods: {
    filterMerchants(e) {
      this.$router.push({
        path: "/stores",
        query: { category: this.category },
      });

      this.$store.dispatch("merchants/fetchMerchants", {
        category: this.category || "",
        page: this.page
      });
    }
  }
};
</script>
