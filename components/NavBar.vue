<template>
  <header
    class="
      flex flex-col flex-shrink-0
      items-center
      sticky
      top-0
      bg-white
      z-50
      w-full
      shadow
    "
  >
    <div
      class="
        px-4
        xs:px-6
        h-14
        flex
        justify-between
        items-center
        max-w-7xl
        w-full
      "
    >
      <div class="mr-2 md:hidden">
        <icon-button>
          <menu-icon></menu-icon>
        </icon-button>
      </div>

      <div class="h-10">
        <nuxt-link to="/" class="mr-6">
          <!-- <brand-logo favicon class="sm:!hidden !w-8 !h-8" /> -->
          <brand-logo class="!w-full !h-full" />
        </nuxt-link>
      </div>

      <!-- <nav class="grow"> -->
      <div
        class="
          bg-primary-blue-light
          px-4
          mx-4
          sm:mx-6
          h-10
          grow
          flex
          items-center
          rounded
          max-w-2xl
        "
      >
        <input
          type="text"
          placeholder="Search Youstore"
          class="focus:outline-none bg-transparent w-full"
        />
        <search-icon class="justify-end" color='primary' />
      </div>

      <app-button
        v-if="!$auth.loggedIn"
        to="/merchant/new"
        color="primary"
        class="hidden md:flex mr-4"
      >
        Become a merchant
      </app-button>

      <!-- <div class=""> -->
        <dropdown-menu v-if="$auth.loggedIn">
          <template v-slot:dropdown-element="{ setOpen, isOpen }">
            <app-button class="rounded-full hover:!bg-transparent" size="small" @click.native="setOpen(!isOpen)">
              <user-avatar class="w-8 h-8" :src="user.photo" :alt="user.firstName" />
            </app-button>
          </template>
          <template v-slot:dropdown-content="{ setOpen }">
            <ul class=" m-0 py-2 px-0 relative list-none outline-0">
              <li v-for="(link, index) in links" :key="index" class="bg-transparent outline-0 border-0 m-0 rounded-none cursor-pointer select-none align-middle appearance-none text-inherit font-normal text-base flex justify-start items-center relative min-h-[48px] py-[6px] px-4 box-border whitespace-nowrap" @click="setOpen(false)">
                <NuxtLink :to="link.to">
                  {{ link.label}}
                </NuxtLink>
              </li>
              <div class="border-t"/>
              <app-button class="" @click="logout" fullWidth>
                Log out
              </app-button>
            </ul>
          </template>
        </dropdown-menu>
        <!-- <div
          v-if="dropdown"
          class="bg-transparent fixed inset-0"
          @click="toggleDropdown">
          <div
            class="bg-white w-60 absolute top-20 right-4 rounded-sm shadow-md"
            @click.stop=""
          >
            <ul class="px-4 py-4">
              <NuxtLink to="/customer/profile">
                <li class="cursor-pointer mb-4">My Account</li>
              </NuxtLink>
              <NuxtLink to="/customer/orders">
                <li class="cursor-pointer mb-4" @click.prevent="getOrders">Orders</li>
              </NuxtLink>
              <NuxtLink to="/customer/wishlist">
                <li class="cursor-pointer mb-4">Wishlist</li>
              </NuxtLink>
              <div class="border-t"/>
              <app-button class="" @click="logout" fullWidth>
                Log out
              </app-button>
            </ul>
          </div>
        </div> -->
      <!-- </div> -->

      <app-button
        v-else
        to="/auth/signup"
        color="primary"
        variant="outlined"
        class="hidden md:flex mr-4"
      >
        Sign up
      </app-button>

      <NuxtLink to="/cart" class="hover:bg-secondary-100 relative rounded-full p-[5px]">
        <cart-icon />
        <div
          v-if="itemsCount"
          class="h-5 w-5 bg-primary-blue rounded-full flex items-center justify-center text-white text-xs absolute -top-2 -right-2"
        >
          <h1>{{ itemsCount }}</h1>
        </div>
      </NuxtLink>

      <!-- </nav> -->
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import BrandLogo from "@/components/svg/Logo";
import CartIcon from "@/components/svg/Cart";
import MenuIcon from "@/components/svg/Menu";
import SearchIcon from "@/components/svg/Search";
import UserAvatar from "@/components/Avatar";
import AppButton from "@/components/buttons/Button";
import IconButton from "@/components/buttons/IconButton";

export default {
  components: {
    "brand-logo": BrandLogo,
    "cart-icon": CartIcon,
    "menu-icon": MenuIcon,
    "search-icon": SearchIcon,
    "user-avatar": UserAvatar,
  },
  data() {
    return {
      isOpen: false,
      links: [
        {
          to: '/customer/profile',
          label: 'My Account'
        },
        {
          to: '/customer/orders',
          label: 'Orders'
        },
        {
          to: '/customer/wishlist',
          label: 'Wishlist'
        },
        {
          to: '/customer/reviews',
          label: 'My Reviews'
        },
      ]
    };
  },
  computed: {
    ...mapGetters({
      itemsCount: "cart/cartItemsCount",
    }),
    user() {
      return this.$auth.user;
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
	
    async logout() {
      await this.$auth.logout();
       window.localStorage.removeItem("ys.user_type")
      // this.$router.push("/auth/login");
      this.$toast.show('Successfully Signed Out')
    },
  },
};
</script>
