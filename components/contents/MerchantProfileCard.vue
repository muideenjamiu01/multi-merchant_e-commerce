<template>
  <div
    class="w-72 bg-primary-blue-light py-8 px-7 hidden xl:block mr-8 text-sm text-center"
  >
    <div  class="flex">
        <img src="../../assets/images/logos/merchant-logo.svg" alt="merchant logo" >
        <div class="flex flex-col text-left mx-4 my-4 ">
            <h1 class="text-2xl font-medium ">Store Name</h1>
            <p class=""> Merchant ID: 30949293</p>
            <p>Test Mode</p>
        </div>
    </div>

    <div class="space-y-6 mt-6 pt-4 border-t">
      <NuxtLink
        :to="nav.link"
        v-for="nav in navs"
        :key="nav.name"
        class="flex items-center space-x-5 font-light cursor-pointer"
      >
        <div class="w-5">
          <img :src="nav.icon" alt="" />
        </div>
        <h1 class="text-xl">{{ nav.name }}</h1>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          icon: require("@/assets/images/icons/overview-icon.svg"),
          name: "Overview",
          link: "overview"
        },
        {
          icon: require("@/assets/images/icons/products-icon.svg"),
          name: "Products",
          link: "products"
        },
        {
          icon: require("@/assets/images/icons/transactions-icon.svg"),
          name: "Transactions",
          link: "transactions"
        },
        {
          icon: require("@/assets/images/icons/customers-icon.svg"),
          name: "Customers",
          link: "customers"
        },
        {
          icon: require("@/assets/images/icons/withdrawals-icon.svg"),
          name: "Withdrawals",
          link: "withdrawals"
        },
        {
          icon: require("@/assets/images/icons/settings-icon.svg"),
          name: "Settings",
          link: "settings"
        }
      ]
    };
  }
};
</script>
