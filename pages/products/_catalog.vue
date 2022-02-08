<template>
  <div class="py-8 px-4 flex">
    <aside>
      <ContentsProductFilter />
    </aside>
    <div>
      <main class="">
        <h1 class="text-2xl font-bold text-primary-black capitalize">
          {{ $route.params.catalog }}
        </h1>
        <div class="flex gap-x-4 gap-y-6 flex-wrap mt-4">
          <ContentsProductCard v-for="card in 16" :key="card.id" />
        </div>
      </main>
    </div>
  </div>
</template>
