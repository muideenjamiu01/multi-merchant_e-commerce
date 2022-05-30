<template>
  <div>
    <div class="h-10 mb-8">
      <nuxt-link to="/" class="mr-6">
        <brand-logo class="!w-full !h-full" />
      </nuxt-link>
    </div>

    <div class="w-full flex items-center flex-col justify-center my-4 px-4">
      <user-avatar :src="user.avatar || ''" :alt="user.firstName" size="large" />
      <p class="font-medium text-lg capitalize truncate">
        {{ fullName }}
      </p>
      <p class="max-w-[180px] capitalize truncate">
        <small>{{ user.role }}</small>
      </p>
    </div>

    <ul class="mt-6 pt-4 border-t">
      <li class="py-3 px-4">
        <NuxtLink to="/admin/dashboard" class="flex items-center space-x-5 hover:text-primary-600 font-medium" active-class="text-primary-600">
          <dashboard-icon size="small" />
          <span class="text-lg capitalize text-inherit">
            Dashboard
          </span>
        </NuxtLink>
      </li>

      <li class="py-3 px-4">
        <button class="w-full p-0 flex items-center space-x-5 hover:text-primary-600 font-medium" @click="toggleDropDown">
          <span class="flex flex-grow items-center">
          <user-icon size="small" />
          <span class="text-lg capitalize text-inherit mx-5">
            Users
          </span>
          </span>
          <chevron-icon :class="['!w-3 !h-3 transition-transform', rotate]"></chevron-icon>
        </button>
      <transition name="fade">
        <ul v-if="isOpen" class="mt-4 ml-12">
          <li class="py-2 px-4 text-left">
            <nuxt-link to="/admin/users" class="hover:text-primary-600 font-medium w-full" active-class="text-primary-600">Admin</nuxt-link>
          </li>
          <li class="py-2 px-4 text-left">
          <nuxt-link to="/admin/customers" class="hover:text-primary-600 font-medium w-full" active-class="text-primary-600">Customers</nuxt-link>
          </li>
          
          <li class="py-2 px-4 text-left">
          <nuxt-link to="/admin/merchants" class="hover:text-primary-600 font-medium w-full" active-class="text-primary-600">Merchants</nuxt-link>
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
      
      <li class="py-3 px-4">
        <NuxtLink to="/admin/products" class="flex items-center space-x-5 hover:text-primary-600 font-medium" active-class="text-primary-600">
            <product-icon size="small" />
            <span class="text-lg capitalize text-inherit">
                Products
            </span>
        </NuxtLink>
      </li>
      <li class="py-3 px-4">
        <NuxtLink to="/admin/orders" class="flex items-center space-x-5 hover:text-primary-600 font-medium" active-class="text-primary-600">
          <transaction-icon size="small" />
          <span class="text-lg capitalize text-inherit">
            Orders
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import SidebarItem from "@/components/Sidebar/Item"
import DashboardIcon from "@/components/svg/Dashboard";
import ChevronIcon from "@/components/svg/chevron";
import BrandLogo from "@/components/svg/Logo";
import ProductIcon from "@/components/svg/Product";
import SettingsIcon from "@/components/svg/Settings";
import TransactionIcon from "@/components/svg/Transaction";
import UserIcon from "@/components/svg/Profile";

export default {
  components: {
    "dashboard-icon": DashboardIcon,
    "chevron-icon": ChevronIcon,
    "product-icon": ProductIcon,
    "settings-icon": SettingsIcon,
    "user-icon": UserIcon,
    "transaction-icon": TransactionIcon,
     SidebarItem,
     BrandLogo
  },
  data () {
    return {
      isOpen: true,
    }
  },
  computed: {
    user() {
      return this.$auth.user
    },
    fullName() {
      return this.user ? this.user.firstName + ' ' + this.user.lastName : ''
    },
    rotate() {
      return {
        "-rotate-90": !this.isOpen
      }
    }
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
