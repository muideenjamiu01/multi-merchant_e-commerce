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

      <app-search v-if="!isMobile"></app-search>

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

      <div class="flex items-center justify-end gap-2">
        <icon-button v-if="isMobile" variant="outlined" color="primary" @click="openSearch" square>
          <search-icon size="small" color="primary" />
        </icon-button>
<!-- 
        <div v-if="isMobile && isSearchOpen">
          <Backdrop />
          <app-search full-screen></app-search>
        </div> -->

        <dropdown-menu>
          <template #reference="{ handleHide, handleShow, isOpen }">
            <icon-button
              v-if="$auth.loggedIn"
              class="px-0 py-0"
              color="primary"
              outlined
              @click.native="() => isOpen ? handleHide($event) : handleShow($event)"
            >
              <user-avatar
                :src="user.avatar"
                :alt="user.firstName || user.storeName"
                size="medium"
                square
                outlined
              />
            </icon-button>
            <icon-button
              v-if="!$auth.loggedIn"
              variant="outlined"
              square
              color="primary"
              @click.native="() => isOpen ? handleHide($event) : handleShow($event)"
            >
              <profile-icon size="small" color="primary" />
            </icon-button>
          </template>
          <template #content="{ handleHide }">
            <dropdown-list @close-dropdown="handleHide">
            </dropdown-list>
          </template>
        </dropdown-menu>

        <icon-button
          v-if="!isMerchant"
          to="/cart"
          class="relative"
          color="primary"
          variant="outlined"
          square
        >
          <cart-icon size="small" color="primary" />
          <div
            v-if="itemsCount"
            class="
              h-5
              w-5
              bg-error-500
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
        </icon-button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import DropdownList from "@/components/Dropdown/contents/Customer"
import Search from "@/components/Search"
import BrandLogo from "@/components/svg/Logo";
import CartIcon from "@/components/svg/Cart";
import ProfileIcon from "@/components/svg/Profile";
import SearchIcon from "@/components/svg/Search";

export default {
  components: {
    "app-search": Search,
    "brand-logo": BrandLogo,
    "cart-icon": CartIcon,
    "profile-icon": ProfileIcon,
    "dropdown-list": DropdownList,
    SearchIcon
  },
  data() {
    return {
      isSearchOpen: false,
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
      return null
    },
    isMerchant() {
      return this.$auth.loggedIn && this.user.storeName;
    },
    isMobile() {
      if (process.client) {
        return window.innerWidth < 600
      }
    }
  },
  methods: {
    openSearch() {
      this.isSearchOpen = true
    }
  }
};
</script>
