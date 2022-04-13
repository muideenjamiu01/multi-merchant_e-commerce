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
        sm:px-6
        md:px-8
        h-14
        flex
        items-center
        justify-between
        max-w-screen-xl
        w-full
      "
    >

      <div class="h-10">
        <nuxt-link to="/" class="mr-6">
          <brand-logo class="!w-full !h-full" />
        </nuxt-link>
      </div>

      <div
        class="
          bg-primary-100
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
          placeholder="Search products"
          class="focus:outline-none bg-transparent w-full"
          @input="handleInput"
          @focus="handleFocus"
        />
        <search-icon class="justify-end" color="primary" />
      </div>

      <app-button
        v-if="isMerchant"
        to="/merchant/dashboard"
        color="primary"
        class="hidden justify-end md:flex capitalize mr-4"
      >
        my dashboard
      </app-button>

      <app-button
        v-else
        to="/merchant/new"
        color="primary"
        class="hidden md:flex mr-4"
      >
        Become a merchant
      </app-button>

      <div class="flex items-center justify-end">
        <dropdown-menu>
          <template #reference="{ handleHide, handleShow, isOpen }">
            <app-button
              class="rounded-full hover:!bg-transparent"
              size="small"
              @click.native="() => isOpen ? handleHide($event) : handleShow($event)"
            >
              <user-avatar
              v-if="$auth.loggedIn"
                class="w-8 h-8"
                :src="user.avatar"
                :alt="user.firstName || user.storeName"
              />
              <profile-icon v-else color="secondary"></profile-icon>
            </app-button>
          </template>
          <template #content="{ handleHide }">
            <dropdown-list @close-dropdown="handleHide">
            </dropdown-list>
          </template>
        </dropdown-menu>

        <!-- <app-button
          v-show="!$auth.loggedIn"
          to="/auth/login"
          color="primary"
          variant="outlined"
          class="hidden xs:flex mr-4"
          uppercase
        >
          Sign in
        </app-button> -->

        <NuxtLink
          v-if="!isMerchant"
          to="/cart"
          class="hover:bg-secondary-100 relative rounded-full p-[5px]"
        >
          <cart-icon />
          <div
            v-if="itemsCount"
            class="
              h-5
              w-5
              bg-primary-blue
              rounded-full
              flex
              items-center
              justify-center
              text-white text-xs
              absolute
              -top-2
              -right-2
            "
          >
            <h1>{{ itemsCount }}</h1>
          </div>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import DropdownList from "@/components/Dropdown/contents/Customer"
import BrandLogo from "@/components/svg/Logo";
import CartIcon from "@/components/svg/Cart";
import ProfileIcon from "@/components/svg/Profile";
import SearchIcon from "@/components/svg/Search";

export default {
  components: {
    "brand-logo": BrandLogo,
    "cart-icon": CartIcon,
    "profile-icon": ProfileIcon,
    "dropdown-list": DropdownList,
    "search-icon": SearchIcon
  },
  // data() {
  //   return {
  //     isOpen: false,
  //   };
  // },
  computed: {
    ...mapGetters({
      itemsCount: "cart/cartItemsCount",
    }),
    user() {
      if (this.$auth.user) {
        return this.$auth.user;
      }
    },
    isMerchant() {
      return this.$auth.loggedIn && this.user.storeName;
    },
  },
  methods: {
    handleFocus() {
      console.log('on Focus')
    },
    handleInput() {
      console.log('on input')
    },
  },
};
</script>
