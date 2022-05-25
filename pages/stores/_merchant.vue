<template>
  <app-container max-width="xl">
    <div class="relative w-full h-[300px]">
      <!-- banner -->
      <img
        :src="merchant.banner"
        :alt="merchant.storeName"
        class="w-full h-full"
      />
      <user-avatar
        :src="merchant.avatar"
        :alt="merchant.storeName"
        class="absolute w-20 h-20 xs:w-40 xs:h-40 left-4 xs:left-8 bottom-40 shadow"
      />
    </div>
      <!-- header -->
    <div class="my-4 ml-[208px] flex-grow pr-4">
      <h1 class="text-xl font-medium">
        {{ merchant.storeName }}
      </h1>
      <p class="text-sm my-2 font-normal">
        {{ merchant.description }}
      </p>
      <div class="mt-4 hidden sm:flex items-center">
        <div class="text-sm font-medium capitalize flex-grow">
          <p>Selling on Youstore: {{ new Date(merchant.created).toLocaleDateString("en-US") }}</p>
          <p>Customer Rating: {{ merchant.customerRating }}</p>
        </div>
        <div class="text-sm font-medium capitalize flex-grow">
          <p>Succesful Sales: {{ merchant.successfulSales }} items</p>
          <p>Order Fulfilment Rate: {{ merchant.orderFufillmentRate }}</p>
        </div>
      </div>
    </div>

    <div class="flex items-center w-full mt-8">
      <Tab name="products" :current-tab="currentTab" @click="handleSelect">
        Products
      </Tab>
      <Tab name="reviews" :current-tab="currentTab" @click="handleSelect">
        Reviews
      </Tab>
    </div>

    <keep-alive>
      <component :is="currentTabComponent" class="tab"></component>
    </keep-alive>
  </app-container>
</template>

<script>
import { mapGetters } from "vuex";
import ProductsList from "@/components/contents/ProductsList";
import ReviewsList from "@/components/contents/ReviewsList";

export default {
  components: {
    ProductsList,
    ReviewsList,
  },
  data() {
    return {
      currentTab: "products",
    };
  },
  computed: {
    ...mapGetters({ data: "merchants/getMerchant" }),
    currentTabComponent() {
      return this.currentTab + "-list";
    },
    merchant() {
      return {
        avatar: this.data.avatar,
        banner:
           this.data.storeBanner || "https://dummyimage.com/1344x400/cc5ca5/fff.png&text=Your+banner+goes+here.",
        storeName: this.data.storeName,
        description: this.data.description || "Aenean ultrices quam sed dolor laoreet, eu suscipit nibh hendrerit. In cursus tincidunt ipsum, quis volutpat urna. Etiam pulvinar purus orci, quis pharetra nunc consequat eu. Mauris sodales quam metus, id pharetra ligula tincidunt quis. Integer ligula ex, egestas sit amet ex ut, porta placerat purus.",
        created: this.data.createdAt,
        fulfilmentRate: this.data.orderFufillmentRate,
        customerRating: this.data.customerRating,
        successfulSales: Math.floor(Math.random() * 200) + 30
      }
    }
  },
  methods: {
    handleSelect(value) {
      this.currentTab = value
    }
  }
};
</script>
