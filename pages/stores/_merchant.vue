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
        class="absolute w-40 h-40 left-8 bottom-20 shadow"
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
        <div class="text-sm font-normal flex-grow">
          <p>Selling on Youstore: {{ merchant.created }} months</p>
          <p>Order Fulfilment Rate: {{ merchant.fulfilmentRate }}</p>
        </div>
        <div class="text-sm font-normal flex-grow">
          <p>Succesful Sales: {{ merchant.successfulSales }} items</p>
          <p>Customer Rating: {{ merchant.customerRating }}</p>
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
import ProductsList from "@/components/contents/ProductsList";
import ReviewsList from "@/components/contents/ReviewsList";

export default {
  components: {
    ProductsList,
    ReviewsList,
  },
  data() {
    return {
      merchant: {
        avatar: "https://randomuser.me/api/portraits/med/women/5.jpg",
        banner:
          "https://dummyimage.com/1344x400/cc5ca5/fff.png&text=Your+banner+goes+here.",
        storeName: "Medovex Corp.",
        description:
          "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Proin venenatis massa eget nunc viverra dignissim. Praesent varius sed turpis vel aliquet. Duis laoreet lacinia auctor. Donec non varius odio. Integer at nibh sit amet lacus eleifend molestie. Donec quis nibh sodales, volutpat lectus non, vehicula nulla. Cras sollicitudin odio id faucibus semper. Suspendisse potenti. Nullam sagittis in ante interdum venenatis.",
        created: Math.floor(Math.random() * 5) + 1,
        fulfilmentRate: "Excellent",
        successfulSales: Math.floor(Math.random() * 200) + 30,
        customerRating: "Excellent",
      },
      currentTab: "products",
    };
  },
  computed: {
    currentTabComponent() {
      return this.currentTab + "-list";
    }
  },
  methods: {
    handleSelect(value) {
      this.currentTab = value
    }
  }
};
</script>
