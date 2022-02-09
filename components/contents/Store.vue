<template>
  <div>
    <div class="py-8 px-4 flex">
      <aside>
        <ContentsProductFilter />
      </aside>
      <div>
        <main class="">
          <div class="flex gap-x-4 gap-y-6 flex-wrap ">
            <ContentsProductCard v-for="card in 16" :key="card.id" />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
