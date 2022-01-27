<template>
  <div class="px-4 py-8 flex">
    <aside>
      <ContentsCustomerProfileCard />
    </aside>
    <main class="w-full">
      <h1 class="text-2xl mb-10">Your Wishlist</h1>
      <ContentsWishlist v-for="n in 12" :key="n" />
    </main>
  </div>
</template>
