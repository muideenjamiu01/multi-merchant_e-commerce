<template>
  <div class="flex mt-8 px-4">
    <side-nav merchant>
        <ContentsMerchantProfileCard />
      </side-nav>
    <main class="w-full text-sm md:ml-72 md:w-[calc(100%_-_288px)]">
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
