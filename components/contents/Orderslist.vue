<template>
  <div class="w-full text-sm font-light pt-4 border-t border-gray-100 mb-6">
    <div
      class="md:flex items-center justify-between"
      v-for="item in productName"
      :key="item._id"
    >
      <div class="md:flex">
        <div class="w-24 h-24 bg-primary-gray mr-4">
          <img :src="item.image" alt="product-image" />
        </div>
        <div class="space-y-0.5">
          <h1 class="font-medium">
            {{ item.name }}
          </h1>
          <p>Size: {{ item.size }}</p>
          <p>Color:{{ item.color }}</p>
          <p  class="font-medium">Price: ₦ {{Number(item.price).toLocaleString() }}</p>
          <p>Quantity:{{ item.quantity }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["productName"],
};
</script>
