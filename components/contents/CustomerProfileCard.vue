<template>
  <div>
    <div class="w-full flex flex-col items-center my-4">
      <user-avatar class="" :src="user.photo" :alt="user.firstName" size="large" />
      <p class="font-medium text-lg my-2 capitalize">
        {{ user.firstName + ' ' + user.lastName }}
      </p>
      <ul class="space-y-2 text-sm">
        <!-- <li>39 items purchased</li> -->
        <li>18 reviews given</li>
        <li>Average rating: 3.8 stars</li>
      </ul>
    </div>

    <ul class="space-y-6 mt-6 pt-4 border-t">
      <li class="">
        <NuxtLink to="/customer/profile" class="flex items-center space-x-5" active-class="text-primary-500">
          <profile-icon />
          <span class="text-xl capitalize text-inherit">
            Profile
          </span>
        </NuxtLink>
      </li>
      <li class="">
        <NuxtLink to="/customer/orders" class="flex items-center space-x-5" active-class="text-primary-500">
          <order-icon />
          <span class="text-xl capitalize text-inherit">
            Order
          </span>
        </NuxtLink>
      </li>
      <li class="">
        <NuxtLink to="/customer/wishlist" class="flex items-center space-x-5" active-class="text-primary-500">
          <wishlist-icon />
          <span class="text-xl capitalize text-inherit">
            Wishlist
          </span>
        </NuxtLink>
      </li>
      <li class="">
        <NuxtLink to="/customer/reviews" class="flex items-center space-x-5" active-class="text-primary-500">
          <review-icon />
          <span class="text-xl capitalize text-inherit">
            Reviews
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import ReviewIcon from "@/components/svg/Review";
import ProfileIcon from "@/components/svg/Profile";
import OrderIcon from "@/components/svg/Order";
import WishlistIcon from "@/components/svg/Wishlist";

export default {
  components: {
    "review-icon": ReviewIcon,
    "profile-icon": ProfileIcon,
    "order-icon": OrderIcon,
    "wishlist-icon": WishlistIcon,
  },
  data () {
    return {}
  },
  computed: {
    user() {
      return this.$auth.user
    }
  }
}
</script>
