<template>
  <div class="flex mt-8 px-4">
    <aside>
      <ContentsMerchantProfileCard />
    </aside>
    <main class="w-full text-sm">
      <div class="border-b">
        <h1 class="text-2xl">
          Add Products
        </h1>
      </div>
      <MerchantProductsAddNewProduct />
    </main>
  </div>
</template>

<script>
export default {
  layout: 'merchant',
  middleware: 'auth-merchant',
}
</script>
