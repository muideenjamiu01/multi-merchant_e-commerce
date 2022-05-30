<template>
  <div>
    <div class="h-10 mb-8">
      <nuxt-link to="/" class="mr-6">
        <brand-logo class="!w-full !h-full" />
      </nuxt-link>
    </div>

    <div class="w-full flex items-center flex-col justify-center my-4">
      <user-avatar class="" :src="user.avatar" :alt="user.storeName" size="large" />
      <p class="font-medium text-lg capitalize">
        {{ user.storeName }}
      </p>
      <p class="max-w-[180px]">
        <small>Merchant ID: {{ user._id }}</small>
      </p>
    </div>

    <ul class="space-y-6 mt-6 pt-4 border-t">
      <li class="">
        <NuxtLink to="/merchant/dashboard" class="flex items-center space-x-5" active-class="text-primary-500">
          <dashboard-icon />
          <span class="text-xl capitalize text-inherit">
            Dashboard
          </span>
        </NuxtLink>
      </li>
      <li class="">
        <NuxtLink to="/merchant/products" class="flex items-center space-x-5" active-class="text-primary-500">
          <product-icon />
          <span class="text-xl capitalize text-inherit">
            Products
          </span>
        </NuxtLink>
      </li>
      
      <li class="">
        <NuxtLink to="/merchant/withdrawals" class="flex items-center space-x-5" active-class="text-primary-500">
          <withdrawal-icon />
          <span class="text-xl capitalize text-inherit">
            Withdrawals
          </span>
        </NuxtLink>
      </li>
      <li class="">
        <NuxtLink to="/merchant/settings" class="flex items-center space-x-5" active-class="text-primary-500">
          <settings-icon />
          <span class="text-xl capitalize text-inherit">
            Settings
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import DashboardIcon from "@/components/svg/Dashboard";
import ProductIcon from "@/components/svg/Product";
import SettingsIcon from "@/components/svg/Settings";
// import TransactionIcon from "@/components/svg/Transaction";
import WithdrawalIcon from "@/components/svg/Withdrawal";
import BrandLogo from "@/components/svg/Logo";

export default {
  components: {
    "dashboard-icon": DashboardIcon,
    "product-icon": ProductIcon,
    "settings-icon": SettingsIcon,
    // "transfer-icon": TransactionIcon,
    "withdrawal-icon": WithdrawalIcon,
    BrandLogo
  },
  data () {
    return {}
  },
  computed: {
    user() {
      return this.$auth.user
    }
  }
}
</script>
