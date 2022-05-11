<template>
  <div>
    <ul class="space-y-6 mt-6 pt-4 border-t">
      <li class="">
        <NuxtLink to="/admin/dashboard" class="flex items-center space-x-5" active-class="text-primary-500">
          <dashboard-icon />
          <span class="text-xl capitalize text-inherit">
            Dashboard
          </span>
        </NuxtLink>
      </li>
      <li class="">
        <NuxtLink to="/admin/users" class="flex items-center space-x-5" active-class="text-primary-500">
          <withdrawal-icon />
          <span class="text-xl capitalize text-inherit">
            Users
          </span>
        </NuxtLink>
      </li>
      
      <li class="">
        <NuxtLink to="/admin/products" class="flex items-center space-x-5" active-class="text-primary-500">
            <product-icon />
            <span class="text-xl capitalize text-inherit">
                Products
            </span>
        </NuxtLink>
      </li>
      <li class="">
        <NuxtLink to="/admin/orders" class="flex items-center space-x-5" active-class="text-primary-500">
          <transaction-icon />
          <span class="text-xl capitalize text-inherit">
            Orders
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
import TransactionIcon from "@/components/svg/Transaction";
import WithdrawalIcon from "@/components/svg/Profile";

export default {
  components: {
    "dashboard-icon": DashboardIcon,
    "product-icon": ProductIcon,
    "settings-icon": SettingsIcon,
    "withdrawal-icon": WithdrawalIcon,
    "transaction-icon": TransactionIcon,
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
