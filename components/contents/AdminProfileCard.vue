<template>
  <div>
    <div class="h-10 mb-8">
      <nuxt-link to="/" class="mr-6">
        <brand-logo class="!w-full !h-full" />
      </nuxt-link>
    </div>

    <div class="w-full flex items-center flex-col justify-center my-4">
      <user-avatar :src="user.avatar || ''" :alt="user.firstName" size="large" />
      <p class="font-medium text-lg capitalize">
        {{ fullName }}
      </p>
      <p class="max-w-[180px] capitalize">
        <small>Role{{ user.role }}</small>
      </p>
    </div>

    <ul class="space-y-6 mt-6 pt-4 border-t">
      <li class="">
        <NuxtLink to="/admin/dashboard" class="flex items-center space-x-5 hover:text-primary-500" active-class="text-primary-500">
          <dashboard-icon />
          <span class="text-xl capitalize text-inherit">
            Dashboard
          </span>
        </NuxtLink>
      </li>
      
      <li class="">
        <button class="w-full p-0 flex items-center space-x-5 hover:text-primary-500" @click="toggleDropDown">
          <span class="flex flex-grow items-center">
          <withdrawal-icon />
          <span class="text-xl capitalize text-inherit mx-5">
            Users
          </span>
          </span>
          <chevron-icon class="w-2 h-2"></chevron-icon>
        </button>
      <transition name="fade">
        <ul v-if="isOpen" class="space-y-6 mt-6 pt-4 ml-8">
          <li class="flex">
            <nuxt-link to="/admin/users" class="hover:text-primary-500" active-class="text-primary-500">Admin</nuxt-link>
          </li>
          <li class="flex">
          <nuxt-link to="/admin/customers" class="hover:text-primary-500" active-class="text-primary-500">Customers</nuxt-link>
          </li>
          
          <li class="flex">
          <nuxt-link to="/admin/merchants" class="hover:text-primary-500" active-class="text-primary-500">Merchants</nuxt-link>
          </li>
        </ul>
      </transition>
      </li>
      
        <!-- <sidebar-item type="dropdown">
          <template #icon>
            <withdrawal-icon />
          </template>

          <template #label>
            Users
          </template>
            
          <template #dropdown-icon>
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
        </sidebar-item> -->
      
      <li class="">
        <NuxtLink to="/admin/products" class="flex items-center space-x-5 hover:text-primary-500" active-class="text-primary-500">
            <product-icon />
            <span class="text-xl capitalize text-inherit">
                Products
            </span>
        </NuxtLink>
      </li>
      <li class="">
        <NuxtLink to="/admin/orders" class="flex items-center space-x-5 hover:text-primary-500" active-class="text-primary-500">
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
import ChevronIcon from "@/components/svg/chevron";

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
  computed: {
    user() {
      return this.$auth.user
    },
    fullName() {
      return this.user ? this.user.firstName + ' ' + this.user.lastName : ''
    },
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
