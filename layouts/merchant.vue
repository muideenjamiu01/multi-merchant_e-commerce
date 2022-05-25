<template>
  <div class="mx-auto font-br-sonoma relative min-h-screen">
    <MerchantNavBar />
    <side-nav>
      <ContentsMerchantProfileCard />
    </side-nav>
    <main class="sm:ml-64 sm:w-[calc(100%_-_256px)] px-4 my-4">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import MerchantNavBar from "@/components/MerchantNavBar"
export default {
  components: {
    MerchantNavBar
  }
}
</script>