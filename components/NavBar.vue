<template>
  <div
    class="py-3 px-4 flex items-center justify-between sticky top-0 bg-white z-50"
  >
    <nuxt-link to="/">
      <img
        src="../assets/images/logos/login-logo.svg"
        class="hidden sm:block"
        alt="login-logo"
      >
      <img
        src="@/assets/images/logos/small-logo.svg"
        class="sm:hidden w-10 h-10"
        alt=""
      >
    </nuxt-link>
    <div
      class="bg-primary-blue-light px-3 py-2 hidden lg:flex justify-between items-center rounded w-full max-w-xl"
    >
      <input
        type="text"
        placeholder="Search Youstore"
        class="focus:outline-none bg-transparent w-full"
      >
      <img class="cursor-pointer" src="@/assets/images/icons/search-icon.svg">
    </div>

    <div class="flex items-center gap-5">
      <nuxt-link to="/merchant/new">
        <h1 class="text-primary-blue text-lg cursor-pointer hidden md:block">
          Become a seller
        </h1>
      </nuxt-link>

      <div>
        <div class="w-7 h-7 cursor-pointer" @click="toggleDropdown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-9 w-9"
            fill="none"
            viewBox="0 2 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div
          v-if="dropdown"
          class="bg-transparent fixed inset-0"
          @click="toggleDropdown"
        >
          <div
            class="bg-white w-60 absolute top-20 right-4 rounded-sm"
            @click.stop=""
          >
            <div class="px-4 py-4">
              <nuxt-link to="/auth/login">
                <button
                  class="bg-primary-blue py-2 text-white font-light w-full rounded-sm"
                >
                  Sign In
                </button>
              </nuxt-link>
            </div>
            <div class="border-t" />
            <div class="px-4 py-4">
              <ul>
                <NuxtLink to="/customer/profile">
                  <li class="cursor-pointer mb-4">
                    My Account
                  </li>
                </NuxtLink>
                <NuxtLink to="/customer/orders">
                  <li class="cursor-pointer mb-4">
                    Orders
                  </li>
                </NuxtLink>
                <NuxtLink to="/customer/wishlist">
                  <li class="cursor-pointer mb-4">
                    Wishlist
                  </li>
                </NuxtLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink to="/cart">
        <img
          class="cursor-pointer"
          src="@/assets/images/icons/cart-icon.svg"
          alt="Checkout image"
        >
      </NuxtLink>
    </div>
  </div>
</template>

<script>
// import Footer from "../base/Footer.vue";
export default {
  components: {
    // Footer,
    // AppHeader
  },
  data () {
    return {
      dropdown: false
    }
  },
  methods: {
    toggleDropdown () {
      this.dropdown = !this.dropdown
    }
  }
}
</script>
