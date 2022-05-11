<template>
  <header
    class="flex flex-col flex-shrink-0 items-center sticky top-0 bg-white z-50 w-full shadow"
  >
    <nav
      class="px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between max-w-screen-xl w-full"
    >
      <div class="h-10">
        <nuxt-link to="/" class="mr-6">
          <brand-logo class="!w-full !h-full" />
        </nuxt-link>
      </div>
      <div class="flex gap-8 items-center">
        <notification-icon class="cursor-pointer" />
        <div class="w-10 h-10 rounded-full bg-primary-blue-light cursor-pointer"></div>
      </div>
    </nav>
  </header>
</template>

<script>
import BrandLogo from "@/components/svg/Logo";
import NotificationIcon from "@/components/svg/Notifications.vue";
export default {
  components: {
    "brand-logo": BrandLogo,
    NotificationIcon,
  },
};
</script>
