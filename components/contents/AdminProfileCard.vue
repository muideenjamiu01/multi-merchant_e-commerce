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
      
        <sidebar-item to="/admin/users">
          <template #icon>
            <withdrawal-icon />
          </template>

          <template #label>
            Users
          </template>
            
          <template #dropdown-icon>
            <icon-button color="primary" size="small" @click="toggleDropDown">
              <chevron-icon />
            </icon-button>
          </template>

          <template v-if="isOpen" #dropdown>
            <li class="flex">
              <nuxt-link to="/admin/users">Admin</nuxt-link>
            </li>
            <li class="flex">
            <nuxt-link to="/admin/customers">Customers</nuxt-link>
            </li>
            
            <li class="flex">

            <nuxt-link to="/admin/merchants">Merchants</nuxt-link>
            </li>
          
          </template>
        </sidebar-item>
      
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
import ChevronIcon from "@/components/svg/Chevron";

import ProductIcon from "@/components/svg/Product";
import SettingsIcon from "@/components/svg/Settings";
import TransactionIcon from "@/components/svg/Transaction";
import WithdrawalIcon from "@/components/svg/Profile";
import SidebarItem from "@/components/Sidebar/Item"
import IconButton from '../buttons/IconButton.vue';
import Sidebar from '../Sidebar.vue';

export default {
  components: {
    "dashboard-icon": DashboardIcon,
    "chevron-icon": ChevronIcon,
    "product-icon": ProductIcon,
    "settings-icon": SettingsIcon,
    "withdrawal-icon": WithdrawalIcon,
    "transaction-icon": TransactionIcon,
     SidebarItem
  },
  data () {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleDropDown() {
      console.log(this.isOpen)
      this.isOpen = !this.isOpen
    }
  }
}
</script>
