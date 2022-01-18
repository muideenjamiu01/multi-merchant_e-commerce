<template>
  <div class="py-8 px-12 flex">
    <aside>
      <ContentsProductFilter />
    </aside>
    <div>
      <main class="px-8">
        <h1 class="text-2xl font-bold">Men's Fashion</h1>
        <div class="flex gap-4 flex-wrap mt-4">
          <ContentsProductCard v-for="card in 16" :key="card.id" />
        </div>
      </main>
    </div>
  </div>
</template>
