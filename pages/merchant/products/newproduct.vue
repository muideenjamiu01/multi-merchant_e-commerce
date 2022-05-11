<template>
  <div>
      <div class="border-b">
        <h1 class="text-2xl">
          Add Products
        </h1>
      </div>
      <MerchantProductsAddNewProduct />
  </div>
</template>

<script>
export default {
  layout: 'merchant',
  middleware: 'auth-merchant',
}
</script>
