<template>
  <div
    class="w-72 bg-primary-blue-light py-8 px-7 hidden xl:block mr-8 text-sm text-center"
  >
    <div class="w-20 h-20 bg-white rounded-full mx-auto my-2" />
    <h1 class="font-medium">
      Lloyd Lane
    </h1>
    <div class="space-y-2">
      <p>39 items purchased</p>
      <p>18 reviews given</p>
      <p>Average rating: 3.8 stars</p>
    </div>

    <div class="space-y-6 mt-6 pt-4 border-t">
      <NuxtLink
        v-for="nav in navs"
        :key="nav.name"
        :to="nav.link"
        class="flex items-center space-x-5 font-light cursor-pointer"
      >
        <div class="w-5">
          <img :src="nav.icon" alt="">
        </div>
        <h1 class="text-xl">
          {{ nav.name }}
        </h1>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        {
          icon: require('@/assets/images/icons/profile-icon.svg'),
          name: 'Profile',
          link: 'profile'
        },
        {
          icon: require('@/assets/images/icons/order-icon.svg'),
          name: 'Orders',
          link: 'orders'
        },
        {
          icon: require('@/assets/images/icons/wishlist-icon.svg'),
          name: 'Wishlist',
          link: 'wishlist'
        },
        {
          icon: require('@/assets/images/icons/review-icon.svg'),
          name: 'Reviews',
          link: 'reviews'
        }
      ]
    }
  }
}
</script>
