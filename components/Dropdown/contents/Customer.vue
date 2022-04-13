<template>
  <ul class="m-0 py-2 px-0 relative list-none outline-0 min-w-[180px]">
    <div v-show="!$auth.loggedIn" class="py-1.5 px-4">
      <app-button
        to="/auth/login"
        color="primary"
        variant="contained"
        uppercase
        fullWidth
      >
        Sign in
      </app-button>

      <p class="text-sm text-center my-2">
        <small
          >New customer?
          <nuxt-link to="/auth/signup" class="text-primary-500 hover:underline"
            >Sign up here</nuxt-link
          ></small
        >
      </p>

      <div class="border-t" />
    </div>

    <li :class="classes" @click="$emit('close-dropdown')">
      <nuxt-link to="/customer/profile">
        <profile-icon size="small" class="mr-4"></profile-icon>
        My account
      </nuxt-link>
    </li>
    <li :class="classes" @click="$emit('close-dropdown')">
      <nuxt-link to="/customer/orders">
        <order-icon size="small" class="mr-4"></order-icon>
        Orders
      </nuxt-link>
    </li>
    <li :class="classes" @click="$emit('close-dropdown')">
      <nuxt-link to="/customer/wishlist">
        <wishlist-icon size="small" class="mr-4"></wishlist-icon>
        Wishlist
      </nuxt-link>
    </li>
    <div v-if="$auth.loggedIn" class="border-t" />
    <app-button v-if="$auth.loggedIn" color="error" @click="logout" fullWidth>
      Log out
    </app-button>
  </ul>
</template>

<script>
import ProfileIcon from "@/components/svg/Profile";
import OrderIcon from "@/components/svg/Order";
import WishlistIcon from "@/components/svg/WishlistOutline";

const classes =
  "bg-transparent outline-0 border-0 m-0 rounded-none cursor-pointer select-none align-middle appearance-none text-inherit font-normal text-base flex justify-start items-center relative min-h-[48px] py-[6px] px-4 box-border whitespace-nowrap";

export default {
  name: "DropdownList",
  components: {
    "wishlist-icon": WishlistIcon,
    "order-icon": OrderIcon,
    "profile-icon": ProfileIcon,
  },
  data() {
    return {
      classes,
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      window.localStorage.removeItem("ys.user_type");
      this.$toast.show("Successfully Signed Out");
    },
  },
};
</script>
