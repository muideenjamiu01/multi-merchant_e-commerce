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
          placeholder="Search Youstore"
          class="focus:outline-none bg-transparent w-full"
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
        <dropdown-menu v-if="$auth.loggedIn && !isMerchant">
          <template v-slot:dropdown-element="{ setOpen, isOpen }">
            <app-button
              class="rounded-full hover:!bg-transparent"
              size="small"
              @click.native="setOpen(!isOpen)"
            >
              <user-avatar
                class="w-8 h-8"
                :src="user.photo || user.avatar"
                :alt="user.firstName || user.storeName"
              />
            </app-button>
          </template>
          <template v-slot:dropdown-content="{ setOpen }">
            <ul class="m-0 py-2 px-0 relative list-none outline-0">
              <li
                v-for="(link, index) in links"
                :key="index"
                class="
                  bg-transparent
                  outline-0
                  border-0
                  m-0
                  rounded-none
                  cursor-pointer
                  select-none
                  align-middle
                  appearance-none
                  text-inherit
                  font-normal
                  text-base
                  flex
                  justify-start
                  items-center
                  relative
                  min-h-[48px]
                  py-[6px]
                  px-4
                  box-border
                  whitespace-nowrap
                "
                @click="setOpen(false)"
              >
                <NuxtLink :to="link.to">
                  {{ link.label }}
                </NuxtLink>
              </li>
              <div class="border-t" />
              <app-button class="" @click="logout" color="error" fullWidth>
                Log out
              </app-button>
            </ul>
          </template>
        </dropdown-menu>
        <app-button
          v-show="!$auth.loggedIn"
          to="/auth/login"
          color="primary"
          variant="outlined"
          class="hidden xs:flex mr-4"
          uppercase
        >
          Sign in
        </app-button>

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
import BrandLogo from "@/components/svg/Logo";
import CartIcon from "@/components/svg/Cart";
import SearchIcon from "@/components/svg/Search";

export default {
  components: {
    "brand-logo": BrandLogo,
    "cart-icon": CartIcon,
    "search-icon": SearchIcon,
  },
  data() {
    return {
      isOpen: false,
      links: [
        {
          to: "/customer/profile",
          label: "My Account",
        },
        {
          to: "/customer/orders",
          label: "Orders",
        },
        {
          to: "/customer/wishlist",
          label: "Wishlist",
        },
        {
          to: "/customer/reviews",
          label: "My Reviews",
        },
      ],
    };
  },
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
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },

    async logout() {
      await this.$auth.logout();
      window.localStorage.removeItem("ys.user_type");
      this.$toast.show("Successfully Signed Out");
    },
  },
};
</script>
