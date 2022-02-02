<template>
  <div class="py-3 px-4 flex items-center justify-between sticky top-0 bg-white z-50">
    <nuxt-link to='/'><img src="../assets/images/logos/login-logo.svg" alt="login-logo"></nuxt-link>
    <div class="bg-primary-blue-light px-3 py-2 hidden lg:flex justify-between items-center rounded w-96">
      <input
        type="text"
        placeholder="Search Youstore"
        class="focus:outline-none bg-transparent w-full"
      />
      <nuxt-link to='/' ><img class="cursor-pointer" src="@/assets/images/icons/search-icon.svg"/></nuxt-link>
    </div>

    <div class="flex items-center gap-5">
      <h1 class="text-primary-blue text-lg cursor-pointer hidden md:block">
        Become a seller
      </h1>
     
      <div>
        <div @click="toggleDropdown" class="w-7 h-7  cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 2 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div v-if="dropdown" @click="toggleDropdown" class="bg-transparent fixed inset-0">
          <div @click.stop="" class="bg-white w-60 absolute top-20 right-4 rounded-sm">
            <div class="px-4 py-4">
              <nuxt-link to='/authentication/login' > 
                <button class="bg-primary-blue py-2 text-white font-light w-full rounded-sm">
                  Sign In 
                </button>
              </nuxt-link>
            </div>
            <div class="border-t"></div>
            <div class="px-4 py-4">
              <ul>
                <nuxt-link to='/merchant/settings' ><li class="cursor-pointer mb-4">My Account</li></nuxt-link>
                <nuxt-link to='/customer/orders'><li class="cursor-pointer mb-4">Orders</li></nuxt-link>
                <nuxt-link to='/customer/wishlist'> <li class="cursor-pointer mb-4">Wishlist</li></nuxt-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img
        class="cursor-pointer"
        src="@/assets/images/icons/cart-icon.svg"
        alt="Checkout image"
      />
    </div>
  </div>
</template>

<script>

// import Footer from "../base/Footer.vue";
export default {
  data() {
    return {
      dropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
  },
  components: {
    // Footer, 
    // AppHeader
  }
};




</script>
