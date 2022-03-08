<template>
  <div class="px-4 py-8 flex">
    <aside>
      <ContentsCustomerProfileCard />
    </aside>
    <div>
      <h1 class="font-bold">
        49 Comments from verified purchase
      </h1>
      <ContentsReviews v-for="n in 12" :key="n" />
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>
