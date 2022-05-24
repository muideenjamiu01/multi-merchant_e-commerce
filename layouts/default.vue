<template>
  <div class="font-br-sonoma">
    <NavBar />
      <div v-if="$nuxt.isOffline" class="max-w-sm mx-auto my-8">
        <wifi-off-icon class="w-24 h-24 text-secondary-300"></wifi-off-icon>
        <h1 class="text-xl text-secondary-500 font-medium">
          You are currently offline
        </h1>
      </div>
      <Nuxt v-else class="min-h-screen" />
      <Footer />
  </div>
</template>

<script>
import WifiOffIcon from "@/components/svg/WifiOff"

export default {
  components: {
    WifiOffIcon
  }
}
</script>