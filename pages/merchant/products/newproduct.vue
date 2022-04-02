<template>
  <div class="flex mt-8 px-4">
    <side-nav merchant>
        <ContentsMerchantProfileCard />
      </side-nav>
      <main class="sm:ml-72 sm:w-[calc(100%_-_288px)] my-4">
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
